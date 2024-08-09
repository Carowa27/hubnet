"use client";

import { color } from "@/utils/colors";
import styled from "styled-components";

// Om man vill ha en grund att bygga på som har den gemensamma styling för alla knappar
// så kan man göra en sån här komponent

const Button = styled.button.attrs<{}>(() => ({}))`
  padding: 10px;
  width: auto;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

// När man har en komponent man vill forsätta bygga på anger man den efter "styled" inom paranteserna

export const ButtonSecondary = styled(Button).attrs<{
  $bgcolor: string;
  $color: string;
  $border: string;
}>((props) => ({
  $bgcolor: props.$bgcolor,
  $color: props.$color,
  $border: props.$border,
}))`
  background: ${(props) => props.$bgcolor};
  color: ${(props) => props.$color};
  border: ${(props) => props.$border};
`;
export const ButtonArrow = styled(Button).attrs<{}>(() => ({}))`
  color: ${color.white};
  background: ${color.backgroundButton};
  aspect-ratio: 1/1;
  height: 3rem;
  padding: 0;

  &:disabled {
    background: ${color.buttonWhiteBackground};
    cursor: not-allowed;
  }
`;
export const ButtonSocial = styled(Button).attrs<{}>(() => ({}))`
  color: ${color.white};
  background: ${color.primary};
  border-radius: 50%;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

// EXEMPEL
// Om man vill kunna skicka in en prop som ändrar styling

// export const ButtonExemple = styled.button.attrs<{
//   $bgcolor?: string;
// }>((props) => ({
//   $bgcolor: props.$bgcolor ?? ${color.white},
// }))`
//   background: ${(props) => props.$bgcolor};
// `;

// SKICKA IN PROPS TILL STYLED COMPONENT
// <ButtonSecondary $bgcolor={color.white}>
// </ButtonSecondary>
