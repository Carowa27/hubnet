"use client";

import { color } from "@/utils/colors";
import styled from "styled-components";

// Om man vill ha en grund att bygga på som har den gemensamma styling för alla knappar
// så kan man göra en sån här komponent

const Button = styled.button.attrs<{}>(() => ({}))`
  padding: 10px;
  width: auto;
  border-radius: 10px;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

// När man har en komponent man vill forsätta bygga på anger man den efter "styled" inom paranteserna

export const ButtonSecondary = styled(Button).attrs<{}>(() => ({}))`
  color: ${color.white};
  border: 1px solid ${color.buttonWhiteBackground};
  background: ${color.darkBlue50Opacity};
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
