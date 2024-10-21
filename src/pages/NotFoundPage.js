import React from "react";
import Header from "../components/Header";
import Error404 from "../components/Error404";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div>
        <Header />
        <Error404 />
        <Footer />
      </div>
  );
};

export default NotFoundPage;