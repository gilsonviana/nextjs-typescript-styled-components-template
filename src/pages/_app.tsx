import { AppProps } from "next/app";
import ThemeProvider from "@styled/theme-provider";
import { GlobalStyle } from "@styled/global-style";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
