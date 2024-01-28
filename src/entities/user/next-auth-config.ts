import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { compact } from 'lodash-es';
import { useSession } from 'next-auth/react';

export const nextAuthConfig: AuthOptions = {
  providers: compact([
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? ''
    })
  ])
}