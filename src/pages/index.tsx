import Head from "next/head";

import { Text } from "@styled/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Text weight="bold" size="extra" color="primary">
          Hello World
        </Text>
      </main>
    </div>
  );
}
