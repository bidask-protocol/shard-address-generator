import { FC } from "react";
import { Block, Container, Image } from "./styles";

interface InfoBlockProps {
  id: number;
  title: string;
  url: string;
  logoImage: string;
}

const INFORMATION = [
  {
    id: 1,
    title: "TheOpenDevBlog",
    url: "https://t.me/TheOpenDevBlog",
    logoImage: "./telegram.svg",
  },
  {
    id: 2,
    title: "GitHub",
    url: "https://github.com/bidask-protocol/shard-address-generator",
    logoImage: "./github.svg",
  },
  {
    id: 3,
    title: "@bidask",
    url: "https://t.me/bidask",
    logoImage: "./bidask.svg",
  },
];

export const InfoBlocks = () => {
  return (
    <Container>
      {INFORMATION.map((info) => (
        <InfoBlock key={info.id} {...info} />
      ))}
    </Container>
  );
};

export const InfoBlock: FC<InfoBlockProps> = ({ url, logoImage }) => {
  return (
    <Block onClick={() => window.open(url, "_blank")}>
      <Image src={logoImage} />
    </Block>
  );
};
