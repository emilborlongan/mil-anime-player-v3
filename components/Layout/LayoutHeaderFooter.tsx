'use client'

import { AppShell, Group, rem, Text } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';

export function LayoutHeaderFooter({ children }: { children: React.ReactNode }) {
  const pinned = useHeadroom({ fixedAt: 120 });

  return (
    <AppShell header={{ height: 60, collapsed: !pinned, offset: false }} padding="md">
      <AppShell.Header>
        <Group h="100%" px="md">
        </Group>
      </AppShell.Header>

      <AppShell.Main pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}>
        {children}
      </AppShell.Main>
      <AppShell.Footer p="md">Footer</AppShell.Footer>
    </AppShell>
  );
}