import React from "react";
import FooterSection from "./FooterSection";
import HeaderSection from "./HeaderSection";

const MainLaout = ({ children }) => {
  return (
    <>
      <HeaderSection />
      <section className="py-5 my-5">{children}</section>
      <FooterSection />
    </>
  );
};
export default MainLaout;
