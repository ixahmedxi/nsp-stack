import { Typography } from '@acme/design-system';
import { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <main>
        <Typography>Hello {session.user.name}</Typography>
        <button type="button" onClick={() => void signOut()}>
          Sign out
        </button>
      </main>
    );
  }

  if (status === 'unauthenticated') {
    return (
      <main>
        <Typography>Hello World</Typography>
        <button type="button" onClick={() => void signIn('github')}>
          Sign in with Github
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Loading...</h1>
    </main>
  );
};

export default Home;
