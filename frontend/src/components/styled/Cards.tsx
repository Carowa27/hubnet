"use client";

import { color } from "@/utils/colors";
import styled from "styled-components";

// Om man vill ha en grund att bygga på som har den gemensamma styling för alla knappar
// så kan man göra en sån här komponent

const Card = styled.div.attrs<{}>(() => ({}))`
  display: flex;
  flex-direction: column;
  justify-content: space-betweeen;
  padding: 15px 20px;
  border-radius: 10px;
`;

export const CardShow = styled(Card).attrs<{
  $bgImg: string;
  $home: boolean;
}>((props) => ({
  $bgImg: props.$bgImg,
  $home: props.$home,
}))`
  justify-content: ${(props) => (props.$home ? "space-between" : "end")};
  width: ${(props) => (props.$home ? "350px" : "281px")};
  height: ${(props) => (props.$home ? "310px" : "245px")};
  background-image: url(${(props) => props.$bgImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CardInfo = styled(Card).attrs<{
  $bgColor: string;
  $width: string;
}>((props) => ({
  $bgColor: props.$bgColor,
  $width: props.$width,
}))`
  background: ${(props) => props.$bgColor};
  width: ${(props) => props.$width};
`;

export const CardSection = styled.div.attrs<{}>(() => ({}))`
  display: flex;
  flex-direction: column;
`;

export const CardSectionShow = styled(CardSection).attrs<{}>(() => ({}))`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(10px, auto);
`;
