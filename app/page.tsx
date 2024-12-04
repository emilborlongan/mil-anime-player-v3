
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { ANIME } from '@consumet/extensions';


interface HomepageProps {
}
export const HomePage: React.FC<HomepageProps> = async () => {


  const animeProvider = new ANIME.Gogoanime();
  const popularResult = (await animeProvider.fetchPopular()).results.map((animes) => {
    return { image: animes.image, title: animes.title };
  });

  const topAiringResult = (await animeProvider.fetchTopAiring()).results.map((animes) => {
    return { image: animes.image, title: animes.title };
  });



  console.log({ popularResult })

  return (
    <>
      <Welcome 
      topAiringAnimes={topAiringResult} 
      popularAnimes={popularResult}
      />
    </>
  );
}


export default HomePage;
