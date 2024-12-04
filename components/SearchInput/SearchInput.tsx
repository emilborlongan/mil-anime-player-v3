'use client'

import '@mantine/core/styles.css';

import { Button, TextInput, Center } from '@mantine/core';



const SearchInput: React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex' }}>
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

export default SearchInput;