import { FC, useState } from "react";
import { CheckedIcon, CopyIcon } from "@src/icons";
import { Container, Title, Value, ValueContainer } from "./styles";

interface InfoItemProps {
  title: string;
  value: string;
}

export const InfoItem: FC<InfoItemProps> = ({ title, value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Container onClick={handleCopy}>
      <Title>{title}:</Title>

      <ValueContainer>
        <Value>{value}</Value>
        {copied ? <CheckedIcon /> : <CopyIcon />}
      </ValueContainer>
    </Container>
  );
};
