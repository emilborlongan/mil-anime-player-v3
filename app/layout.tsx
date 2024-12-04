import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import { LayoutHeaderFooter } from '../components/Layout/LayoutHeaderFooter'

export const metadata = {
  title: 'Mil Anime Player',
  description: 'Non profit anime streaming website!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <LayoutHeaderFooter>
            {children}
          </LayoutHeaderFooter>
        </MantineProvider>
      </body>
    </html>
  );
}
