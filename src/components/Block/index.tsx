import React from "react";

import "./Block.scss";

interface BlockProps {
  children: React.ReactNode;
}

const Block = ({ children }: BlockProps) => {
  return <div className="block">{children}</div>;
};

export default Block;
