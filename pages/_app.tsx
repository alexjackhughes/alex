import "tailwindcss/tailwind.css";
import "../styles/Typography.css";
import "../styles/Code.css";

import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
