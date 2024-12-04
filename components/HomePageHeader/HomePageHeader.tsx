import cx from 'clsx';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import classes from './HomePageHeader.module.css';

export function HomePageHeader() {
    return (
        <div className={classes.wrapper}>
            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Welcome to {' '}
                    <Text component="span" inherit className={classes.highlight}>
                        Mil Anime Player
                    </Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>

                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} variant="white" size="lg">
                        Browse by genre
                    </Button>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
                        Anime List
                    </Button>
                </div>
            </div>
        </div>
    );
}