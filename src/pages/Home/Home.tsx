import React from "react";

import Body from "@components/Body/Body";
import { logoText, introdata } from "@components/Content/Content";

import Typewriter from "typewriter-effect";

type Props = {};

const Home = (props: Props) => {
  return (
    <Body>
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="d-flex flex-column">
          <h3 className="h3 m-0 text-center text-capitalize">I'm {logoText}</h3>
          <h2 className="h2">
            <Typewriter
              options={{
                strings: [
                  introdata.animated.first,
                  introdata.animated.second,
                  introdata.animated.third,
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
              }}
            />
          </h2>
        </div>
      </div>
    </Body>
  );
};

export default Home;
