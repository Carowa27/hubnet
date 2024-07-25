"use client";
import styled from "styled-components";
import { color } from "@/utils/colors";
import { devices } from "@/utils/devices";

export const Paragraph = styled.p.attrs<{}>(() => ({}))`
  font-size: 16px;
  color: ${color.paragraphColor};
`;
export const ShowCardParagraph = styled(Paragraph).attrs<{}>(() => ({}))`
  font-size: 14px;
`;
export const FooterParagraph = styled(Paragraph).attrs<{}>(() => ({}))`
  color: ${color.paragraphFooter};
  text-align: center;

  @media only screen and (${devices.tablet}) {
    max-width: 54rem;
  }
`;
export const HeroInspoText = styled(Paragraph).attrs<{}>(() => ({}))`
  font-size: 32px;
  text-transform: uppercase;
`;
export const ArrowIcon = styled(Paragraph).attrs<{}>(() => ({}))`
  font-size: 36px;
  margin: 0;
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

export const LinkDefault = styled.a.attrs<{}>(() => ({}))`
  font-size: 16px;
  color: ${color.white};
  text-decoration: none;
`;
