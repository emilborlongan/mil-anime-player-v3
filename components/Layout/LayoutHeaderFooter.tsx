'use client'

import { AppShell, Center, Group, rem } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import SearchInput from '../SearchInput/SearchInput';

export function LayoutHeaderFooter({ children }: { children: React.ReactNode }) {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md" style={{ justifyContent: 'end' }}>
          <SearchInput />
        </Group>
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        {children}
      </AppShell.Main>

      <Center>
        Made by milpu
      </Center>
    </AppShell>
  );
}