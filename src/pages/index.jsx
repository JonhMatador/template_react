import React from "react";
import Wrapper from "./Wrapper";
import HomePage1 from "./home";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title:
    "Home || Educrat - Professional LMS Online Education Course ReactJS Template",
  description:
    "Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.",
};

export default function index() {
  return (
    <Wrapper>
      <MetaComponent meta={metadata} />
      <HomePage1 />
    </Wrapper>
  );
}
