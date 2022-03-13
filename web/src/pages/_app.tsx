import 'src/styles/globals.css';
import 'src/styles/tailwind.css';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default App;
