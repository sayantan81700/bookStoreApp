import React from "react";
import Navbar from "../Navbar";
import Cource from "../Cource";
import Footer from "../Footer";

function Courses() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen  ">
        <Cource />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
