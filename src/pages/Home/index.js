import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomeContainers from "containers/Home";

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Quiz game</title>
      </Helmet>
      <HomeContainers />
    </HelmetProvider>
  );
};

export default HomePage;
