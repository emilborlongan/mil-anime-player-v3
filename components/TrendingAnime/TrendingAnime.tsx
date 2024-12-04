'use client'

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import CardsCarousel from '../Carousel/CardsCarousel';


interface CardProps {
    image: string;
    title: string;
    category?: string;
}

interface TrendingAnimeProps {
    animes: CardProps[]
}

const TrendingAnime: React.FC<TrendingAnimeProps> = ({ animes }) => {
    return (
        <div style={{ width: "100%", paddingBottom: "10px"}}>
            <CardsCarousel animes={animes} />
        </div>
    );
}

export default TrendingAnime;