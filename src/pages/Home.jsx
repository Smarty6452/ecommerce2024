import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </>
  );
};

export default Home;
