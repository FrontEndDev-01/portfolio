import React from "react";

import Body from "@components/Body/Body";
import { logoText } from "@components/Content/Content";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <Body>
        <h1>{logoText}</h1>
      </Body>
    </>
  );
};

export default Dashboard;
