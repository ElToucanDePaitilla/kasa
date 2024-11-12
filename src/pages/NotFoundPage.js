import React from "react";
import Header from "../components/Header";
import Error404 from "../components/Error404";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <main>
        <Header />
        <Error404 />
        <Footer />
    </main>
  );
};

export default NotFoundPage;