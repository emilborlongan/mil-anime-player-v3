import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';
import CardsCarousel from '../Carousel/CardsCarousel';

interface WelcomeProps {
    data: any;
}

export const  Welcome: React.FC<WelcomeProps> = ({ data }) => {

  console.log('welcome data {0}' , data)

  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mil-Anime-Player
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        Simple web player for anime.
      </Text>

      <CardsCarousel animes={data} />
    </>
  );
}
