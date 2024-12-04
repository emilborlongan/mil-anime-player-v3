'use client'

import '@mantine/core/styles.css';

import { Button, Text, TextInput, Center } from '@mantine/core';



const TopAnimes: React.FC = () => {
    return (
        <>
            <Center style={{ paddingTop: '100px'}}>
                <Text inherit variant="gradient" component="span" gradient={{ from: 'cyan', to: 'blue' }}>
                    Searching for specific anime?
                </Text>
            </Center>
            <div style={{ padding: '10px 750px 250px 750px', display: 'flex' }}>
                <TextInput
                    size="md"
                    radius="md"
                    style={{ flex: 1, paddingRight: '10px' }}
                    placeholder="Searching for specific anime?"
                />
                <Button size="md"
                    radius="md"
                    variant="filled">Search</Button>
            </ div>
        </>
    );
}

export default TopAnimes;