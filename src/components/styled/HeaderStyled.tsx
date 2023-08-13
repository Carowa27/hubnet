import { styled } from "styled-components";

interface IHeader {
    color?: string;
    backgroundimage?: string;
}

export const HeaderContainer = styled.div<IHeader>`
    width: 100%;
    min-height: 100vh;
    background-image: url(${({backgroundimage}) => backgroundimage ? backgroundimage : "none"});
    background-size: cover; 

    &:after {
        content: "";
        width: 100%;
        height: 50vh;
        top: 50vh;
        position: absolute;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
    }
`

export const HeaderTitle = styled.div<IHeader>`
    width: 100vw;
    position: absolute;
    opacity: 30%;
    top: 80px;
    margin-left: 50px;
    font-size: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 1;

    & h1 {
        width: 70vw;
    }

`