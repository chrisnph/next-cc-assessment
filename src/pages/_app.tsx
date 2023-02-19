import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { JobsProvider } from "./jobs/context/JobContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JobsProvider>
      <Component {...pageProps} />
    </JobsProvider>
  );
}
