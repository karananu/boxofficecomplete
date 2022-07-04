import React from "react";
import { TitleWrapper } from "./Title.styled";

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <h1>
        {title}
        <p>{subtitle} </p>
      </h1>
    </TitleWrapper>
  );
};

export default Title;
