'use client';

import { ComposeChildren } from '@/shared/lib/react';
import { queryClient } from '@/shared/api/query-client';
import AuthProvider from '@/entities/user/auth-provider';
import { ThemeProvider } from '@/features/theme/theme-provider';
import { QueryClientProvider } from '@tanstack/react-query';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider />
      <AuthProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
