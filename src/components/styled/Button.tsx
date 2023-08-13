import { styled } from "styled-components";

interface IButton {
    color?: string;
    textcolor?: string;
}

export const WatchVideoBtn = styled.button<IButton>`
    width: 200px;
    height: 60px;
    border: none;
    background-color: ${({color}) => color ? color : "#3C3C3C" };
    color: ${({textcolor}) => textcolor ? textcolor : "white" };
    clip-path: polygon(0% 0%, 0% 100%, 90% 100%, 100% 70%, 100% 0%);

    &:hover {
        cursor: pointer;
    }
`