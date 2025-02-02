import "@mantine/core/styles.css";
import Head from "next/head";
import { AppShell, BackgroundImage, MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import { Header } from "../components/HeaderSimple/Header";
import { Footer } from "../components/Footer/Footer";

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>TeaCo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <AppShell header={{ height: 80 }} footer={{ height: 180 }}>
        <BackgroundImage bga="local" src={"/Background.png"}>
          <AppShell.Header style={{ background: "none", borderBottom: "none" }}>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
        <AppShell.Footer>
          <Footer />
        </AppShell.Footer>
        </BackgroundImage>
      </AppShell>
    </MantineProvider>
  );
}
