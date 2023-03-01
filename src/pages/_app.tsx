// import '@/styles/globals.css';
import { ThemeProvider } from '@/Providers/themeProvider';
import type { AppProps } from 'next/app';

import { GlobalStyle } from '@/styles/globalStyle';
import GNB from '@/components/GNB/GNB';
import { Footer } from '@/components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <RecoilRoot>
          <ThemeProvider>
            <GlobalStyle />
            <div id="wrap">
              <section>
                <Component {...pageProps} />
              </section>
              <GNB />
              <Footer />
            </div>
          </ThemeProvider>
        </RecoilRoot>
      </SSRProvider>
    </>
  );
}
