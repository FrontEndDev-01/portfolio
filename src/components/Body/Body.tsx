import React from "react";

type Props = {
  children: React.ReactNode;
};

const Body = ({ children }: Props) => {
  return (
    <>
      <div className="container-xl">{children}</div>
    </>
  );
};

export default Body;
