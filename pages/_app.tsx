import 'tailwindcss/tailwind.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../src/app/Theme/themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
