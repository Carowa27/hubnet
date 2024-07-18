import styled from "styled-components";

export const Paragraph = styled.p.attrs<{}>(() => ({}))`
  font-size: 16px;
`;
export const H1 = styled.h1.attrs<{}>(() => ({}))`
  font-size: 36px;
  text-transform: uppercase;
`;
export const H2 = styled.h2.attrs<{}>(() => ({}))`
  font-size: 24px;
  text-transform: uppercase;
`;
export const H3 = styled.h3.attrs<{}>(() => ({}))`
  font-size: 20px;
  text-transform: uppercase;
`;
export const ShowCardParagraph = styled(Paragraph).attrs<{}>(() => ({}))`
  font-size: 14px;
`;
export const HeroInspoText = styled(Paragraph).attrs<{}>(() => ({}))`
  font-size: 32px;
  text-transform: uppercase;
`;
export const ArrowIcon = styled(Paragraph).attrs<{}>(() => ({}))`
  font-size: 36px;
  margin: 0;
`;
