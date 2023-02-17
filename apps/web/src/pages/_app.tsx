import { trpc } from '@acme/shared/client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import '../styles/global.css';

interface Props extends AppProps {
  pageProps: {
    session: Session;
  };
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
