import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/jobs");
  }, []);

  return (
    <>
      <Head>
        <title>Cult Creative</title>
        <meta name="description" content="Cult Creative App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    </>
  );
}
