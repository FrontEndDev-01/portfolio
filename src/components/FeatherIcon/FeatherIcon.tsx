import React, { useEffect } from "react";

import feather from "feather-icons";

type Props = {
  icon?: string;
  className?: string;
  style?: {};
};

const FeatherIcon = (props: Props) => {
  const { icon, className, style } = props;

  useEffect(() => {
    feather.replace();
  }, []);
  return <i data-feather={icon} className={className} style={style}></i>;
};

export default FeatherIcon;
