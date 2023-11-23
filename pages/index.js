import React from 'react';
import PageDescription from "../components/baseComponents/head/pageDescription/PageDescription";
import defaultPage from "../constants/page-description";

export default function Home() {

  return (
    <div className="container">
      <PageDescription {...defaultPage}/>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
