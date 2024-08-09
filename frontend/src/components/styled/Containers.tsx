"use client";
import { color } from "@/utils/colors";
import { devices } from "@/utils/devices";
import styled from "styled-components";

export const FooterContainer = styled.footer.attrs<{}>(() => ({}))`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 3rem;
  background: ${color.backgroundFooterAndHeader};

  @media only screen and (${devices.tablet}) {
    padding: 3rem 12rem;
    gap: 3rem;
  }

  // footer nav
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 32rem;
  }

  // footer logos
  & > div:last-child {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    @media only screen and (${devices.tablet}) {
      position: absolute;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 0 3rem;
      bottom: 0;
    }
  }
`;

export const HeroContainer = styled.div.attrs<{
  $bgimg: string;
}>((props) => ({
  $bgimg: props.$bgimg,
}))`
  background: url(${(props) => props.$bgimg});
  min-height: 742px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
