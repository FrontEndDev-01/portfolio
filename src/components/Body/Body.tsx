import React from "react";

import Header from "@components/Header/Header";

type Props = {
  children: React.ReactNode;
};

const Body = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default Body;
