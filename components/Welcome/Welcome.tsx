import { Center, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import TopAnimes from '../TopAnime/TopAnime';
import TrendingAnime from '../TrendingAnime/TrendingAnime';
import { HomePageHeader } from '../HomePageHeader/HomePageHeader';



interface WelcomeProps {
  topAiringAnimes: any;
  popularAnimes: any;
}

export const Welcome: React.FC<WelcomeProps> = ({ topAiringAnimes, popularAnimes }) => {
  return (
    <>
      <HomePageHeader />
      <Center>
        <TrendingAnime animes={topAiringAnimes} />
      </Center>

      <Center>
        <TopAnimes animes={popularAnimes} />
      </Center>
    </>
  );
}
