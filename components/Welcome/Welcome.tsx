import { Center, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import TopAnimes from '../TopAnime/TopAnime';
import TrendingAnime from '../TrendingAnime/TrendingAnime';
import HomePageSearchBar from '../HomePageSearchBar/HomePageSearchBar';


interface WelcomeProps {
  topAiringAnimes: any;
  popularAnimes: any;
}

export const Welcome: React.FC<WelcomeProps> = ({ topAiringAnimes, popularAnimes }) => {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mil-Anime-Player
        </Text>
      </Title>
      <HomePageSearchBar />
      <Center>
        <TrendingAnime animes={topAiringAnimes} />
      </Center>

      <Center>
        <TopAnimes animes={popularAnimes} />
      </Center>
    </>
  );
}
