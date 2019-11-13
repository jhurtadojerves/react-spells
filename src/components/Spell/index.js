import React from "react";
import { Article, Anchor, Title, Badge, Paragraph } from "./styles";

export const Spell = ({
  url,
  id,
  name,
  description,
  range,
  type,
  method,
  object,
  battles
}) => (
  <Article>
    <Title>
      <Anchor href={url}>{name}</Anchor>
    </Title>
    <Badge> {type}</Badge>&nbsp;
    <Badge>{method}</Badge>
    <Paragraph>
      {description}
      <br />
      <br />
      <strong>Forma de Invocación: </strong> {object}
      <br />
      <br />
      <strong>Lista: </strong>
    </Paragraph>
    <ul>
      {range.map((r, key) => (
        <li key={key}>{r.name}</li>
      ))}
    </ul>
  </Article>
);
