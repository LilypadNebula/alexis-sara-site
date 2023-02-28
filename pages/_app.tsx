import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import localFont from "@next/font/local";
import Link from "next/link";
import NavLink from "../components/NavLink";
import "../styles/globals.css";
import Head from "next/head";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

const peomy = localFont({
  src: "../styles/Peomy-Extended.otf",
  variable: "--font-peomy",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <Head>
        <title>Alexis Sara</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/AS.svg" />
      </Head>
      <nav
        className={`${nunito.variable} ${peomy.variable} flex justify-between items-center font-highlight text-6xl p-8 text-white`}
      >
        <Link className="text-8xl" href="/">
          Alexis Sara
        </Link>
        <div className="space-x-6 mr-32">
          <NavLink
            href="/about"
            activeClassName="underline underline-offset-8 decoration-dotted"
          >
            About
          </NavLink>
          <NavLink
            href="/projects"
            activeClassName="underline underline-offset-8 decoration-dotted"
          >
            Projects
          </NavLink>
          <NavLink
            href="/contact"
            activeClassName="underline underline-offset-8 decoration-dotted"
          >
            Contact
          </NavLink>
        </div>
      </nav>
      <main
        className={`${nunito.variable} ${peomy.variable} font-sans p-8 grow`}
      >
        <Component {...pageProps} />
      </main>
    </div>
  );
}
