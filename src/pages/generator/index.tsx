import { FC } from "react";
import { GeneratorForm, Header, InfoBlocks } from "@src/components";
import { LightCircle, Wrapper } from "./styles";

export const Generator: FC = () => {
  return (
    <Wrapper>
      <Header />
      <LightCircle />
      <GeneratorForm />
      <InfoBlocks />
    </Wrapper>
  );
};
