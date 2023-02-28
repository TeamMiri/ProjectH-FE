// import '@/styles/globals.css';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import theme from '@/styles/Theme';
import { GlobalStyle } from '@/styles/globalStyle';
import GNB from '@/components/GNB/GNB';
import { Footer } from '@/components/Footer/Footer';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <div id="wrap">
          <GNB />
          <section>
            <Component {...pageProps} />
          </section>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
