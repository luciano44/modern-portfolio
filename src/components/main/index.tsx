import React from "react";
import "./style.scss";

type Props = {
  children: React.ReactNode;
};

function Main(props: Props) {
  return (
    <>
      <div className="main">{props.children}</div>
    </>
  );
}

export default Main;
