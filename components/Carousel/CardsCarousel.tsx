'use client'

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { Carousel } from '@mantine/carousel';
import { Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './CardsCarousel.module.css';

interface CardProps {
  image: string;
  title: string;
  category?: string;
}

function Card({ image, title, category }: CardProps) {
  return (
    <>
      <Paper
        shadow="md"
        p="xl"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
        </div>
        <Button onClick={() => { console.log('go to url watch') }} variant="white" color="dark">
          Watch
        </Button>
      </Paper>
      <Text className={classes.title}>
        {title}
      </Text>
    </>
  );
}


interface CardsCarouselProps {
  animes: CardProps[]
}

const CardsCarousel: React.FC<CardsCarouselProps> = ({ animes }) => {
  console.log({ animes })
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = animes.map((item: any) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      controlSize={40}
      withIndicators
      slideSize={{ base: '100%', sm: '20%' }}
      slideGap={{ sm: 'xl' }}
      align="start"
      slidesToScroll={mobile ? 1 : 4}
    >
      {slides}
    </Carousel>
  );
}

export default CardsCarousel;