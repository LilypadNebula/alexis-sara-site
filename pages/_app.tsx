import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import localFont from "@next/font/local";
import Link from "next/link";
import NavLink from "../components/NavLink";
import "../styles/globals.css";

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
    <>
      <nav
        className={`${nunito.variable} ${peomy.variable} flex items-center font-highlight text-4xl p-4`}
      >
        <Link className="text-8xl text-softPink mr-48" href="/">
          Alexis Sara
        </Link>
        <div className="space-x-4">
          <NavLink href="/about" activeClassName="text-hotPink">
            About
          </NavLink>
          <NavLink href="/projects" activeClassName="text-hotPink">
            Projects
          </NavLink>
        </div>
      </nav>
      <main className={`${nunito.variable} ${peomy.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
