import Head from "next/head";

import { Text, TitleXL, Container } from "@styled/index";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TitleXL>Title XL</TitleXL>
        <Text weight="bold" size="extra" color="primary">
          Hello World
        </Text>
      </main>
    </Container>
  );
}
