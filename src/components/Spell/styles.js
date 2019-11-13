import styled from "styled-components";

export const Article = styled.article`
  padding: 1%;
  margin: 0.1% 0;
  width: 88%;
  color: #ff6132;
  background-color: #31333c;
  text-decoration: none;
  &:hover {
    background-color: #3b3e49;
    box-shadow: 5px 5px 92px -12px #000;
  }
`;

export const Anchor = styled.a`
  color: #ff6132;
  text-decoration: underline;
`;

export const Title = styled.h2`
  display: inline;
  margin: 0.8%;
`;

export const Badge = styled.span`
  font-size: 80%;
  background-color: #ff2554;
  color: #fff;
  padding: 0.2em;
  border-radius: 5px;
`;

export const Paragraph = styled.p`
  color: #fff;
  text-align: justify;
  text-shadow: 0 0 1px #fff;
`;
