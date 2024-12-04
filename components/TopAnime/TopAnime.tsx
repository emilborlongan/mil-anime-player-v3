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

interface TopAnimesProps {
    animes: CardProps[]
}

const TopAnimes: React.FC<TopAnimesProps> = ({ animes }) => {
    return (
        <div style={{ width: "100%" , paddingBottom: "50px"}}>
            <CardsCarousel animes={animes} />
        </div>
    );
}

export default TopAnimes;