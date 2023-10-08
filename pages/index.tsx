import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-y-scroll bg-background font-poppins text-white">
      <Head>
        <title>Portfolio Zita</title>
      </Head>
      <main>
        {/* HEADER */}
        <Header />

        {/* HERO */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        {/* ABOUT */}
        <section id="about" className="h-screen snap-center">
          <h1>About</h1>
        </section>

        {/* EXPERIENCE */}

        {/* PROJECTS */}

        {/* CONTACT */}
      </main>
    </div>
  );
};

export default Home;
