import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ObjectList from "../components/ObjectList";
import SubjectList from "../components/SubjectList";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <ObjectList />
      <SubjectList />
      <Footer />
    </div>
  );
}

export default Home;
