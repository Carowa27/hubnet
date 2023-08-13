import styled from 'styled-components';

interface IYoutube {
    color?: string;
    textcolor?: string;
    backgroundimage?: string;
}

export const YoutubeContainer = styled.div<IYoutube>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 450px;
    background-image: url(${({backgroundimage}) => backgroundimage ? backgroundimage : "#3C3C3C" });
    background-size: cover;
    position: relative;    
    clip-path: polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%);
    margin: 80px;
`

export const PlayBtn = styled.button<IYoutube>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 50px;
    background-color: ${({color}) => color ? color : "#3C3C3C" };
    border: none;

    &:hover {
        cursor: pointer;
    }

    & div span {
        color: ${({textcolor}) => textcolor ? textcolor : "white" };
        font-size: 30px;
        width: 100%;
    }
`