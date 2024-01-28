'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';
import { LogOut, User } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

// import readUserSession from '@/shared/actions';
// import createSupabaseServerClient from '@/entities/supabase/server';
import { redirect } from 'next/navigation';
import { createClient } from '@/entities/supabase/client';
import { useAppSession } from '@/entities/user/use-app-session';
import { Skeleton } from '@/shared/ui/skeleton';
import { SignInButton } from '@/features/auth/sing-in-button';
import { useSignOut } from '@/features/auth/use-sign-out';

// import { logout } from '@/features/auth/actions';
// import { useAppSession } from "@/entities/user/session";
// import { Skeleton } from "@/shared/ui/skeleton";
// import { useSignOut } from "@/features/auth/use-sign-out";
// import { SignInButton } from "@/features/auth/sign-in-button";
// import { ProfileAvatar, getProfileDisplayName } from "@/entities/user/profile";

export function Profile() {
  const session = useAppSession();
  const { signOut, isPending: isLoadingSignOut } = useSignOut();

  if (session.status === 'loading') {
    return <Skeleton className='w-8 h-8 rounded-full' />;
  }

  if (session.status === 'unauthenticated') {
    return <SignInButton />;
  }

  // const user = session?.data?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='p-px rounded-full self-center h-8 w-8'>
          {/* <ProfileAvatar profile={user} className="w-8 h-8" /> */}
          <Avatar className='w-8 h-8'>
            <AvatarImage src={session.data?.user?.image} />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56 mr-2 '>
        <DropdownMenuLabel>
          <p>My account</p>
          <p className='text-xs text-muted-foreground overflow-hidden text-ellipsis'>
            {/* {user ? getProfileDisplayName(user) : undefined} */}
            {session.data?.user.name}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/profile/1`}>
              <User className='mr-2 h-4 w-4' />
              <span>Profile</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => signOut()} disabled={isLoadingSignOut}>
            {' '}
            {/** disabled={isLoadingSignOut} onClick={() => signOut()} */}
            <LogOut className='mr-2 h-4 w-4' />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
