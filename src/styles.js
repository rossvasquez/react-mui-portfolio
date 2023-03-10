import { css } from '@emotion/react'

export const styleSheet = {
    landingDiv: css`
        height: 100vh;
        scroll-snap-align: start;
    `,

    aboutDiv: css`
        margin-top: 120px;
        position: relative;
        height: auto;
        scroll-snap-align: start;
        padding-top: 20px;
    `,
    
    projectsDiv: css`
        position: relative;
        margin-top: 120px;
        height: auto;
        scroll-snap-align: start;
        padding-top: 20px;
    `,
    
    connectDiv: css`
        position: relative;
        margin-top: 120px;
        scroll-snap-align: start;
        padding-top: 20px;
    `,
    
    dynamic: css`
    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }


    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #181818;
    overflow: hidden;
    
    span {
        width: 42vmin;
        height: 42vmin;
        border-radius: 42vmin;
        backface-visibility: hidden;
        position: absolute;
        animation: move;
        animation-duration: 34;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    
    
    span:nth-child(0) {
        color: #404040;
        top: 23%;
        left: 30%;
        animation-duration: 18s;
        animation-delay: -140s;
        transform-origin: 19vw 6vh;
        box-shadow: 84vmin 0 11.188195341433854vmin currentColor;
    }
    span:nth-child(1) {
        color: #80d8ff;
        top: 86%;
        left: 42%;
        animation-duration: 100s;
        animation-delay: -75s;
        transform-origin: 23vw -7vh;
        box-shadow: -84vmin 0 10.758208502989033vmin currentColor;
    }
    span:nth-child(2) {
        color: #404040;
        top: 38%;
        left: 4%;
        animation-duration: 41s;
        animation-delay: -68s;
        transform-origin: 8vw -24vh;
        box-shadow: -84vmin 0 11.028327719368225vmin currentColor;
    }
    span:nth-child(3) {
        color: #80d8ff;
        top: 16%;
        left: 58%;
        animation-duration: 152s;
        animation-delay: -50s;
        transform-origin: -20vw -18vh;
        box-shadow: -84vmin 0 11.260804528666066vmin currentColor;
    }
    span:nth-child(4) {
        color: #80d8ff;
        top: 32%;
        left: 50%;
        animation-duration: 78s;
        animation-delay: -7s;
        transform-origin: 11vw 11vh;
        box-shadow: -84vmin 0 11.33948097627774vmin currentColor;
    }
    span:nth-child(5) {
        color: #404040;
        top: 5%;
        left: 65%;
        animation-duration: 135s;
        animation-delay: -48s;
        transform-origin: 24vw -13vh;
        box-shadow: 84vmin 0 10.573193051677377vmin currentColor;
    }
    span:nth-child(6) {
        color: #404040;
        top: 42%;
        left: 26%;
        animation-duration: 147s;
        animation-delay: -115s;
        transform-origin: -16vw 20vh;
        box-shadow: -84vmin 0 11.35515583586967vmin currentColor;
    }
    span:nth-child(7) {
        color: #B3B3B3;
        top: 20%;
        left: 63%;
        animation-duration: 109s;
        animation-delay: -88s;
        transform-origin: -13vw -5vh;
        box-shadow: 84vmin 0 10.609159739429737vmin currentColor;
    }
    span:nth-child(8) {
        color: #404040;
        top: 20%;
        left: 46%;
        animation-duration: 73s;
        animation-delay: -148s;
        transform-origin: -10vw 22vh;
        box-shadow: -84vmin 0 10.535468301079366vmin currentColor;
    }
    span:nth-child(9) {
        color: #B3B3B3;
        top: 40%;
        left: 6%;
        animation-duration: 102s;
        animation-delay: -84s;
        transform-origin: 23vw 12vh;
        box-shadow: 84vmin 0 11.405187449078882vmin currentColor;
    }
    
    `,

    name: css`
        font-family: 'Rock Salt', cursive;
        font-size: 150%;
        position: absolute;
        right: 6vw;
        top: clamp(20px, 3.5vw, 40px);
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    `,

    menuIcon: css`
        position: absolute;
        left: 3vw;
        top: clamp(13px, 2vw, 25px);
    `,
    
    mainPic: css`
        position: absolute;
        transform: translate(-50%, -50%);
        left: 50%;
        top: 45%;
        width: clamp(300px, 70vw, 450px);
        height: clamp(300px, 70vw, 450px);
        `,

    welcomeMessage: css`
        position: absolute;
        transform: translate(-50%, -50%);
        width: 100%;
        left: 50%;
        top: clamp(calc(50% + 200px), calc(50% + 37vw), calc(50% + 265px)); 
        color: #FFFFFF; 
        font-size: 8vw;
        font-size: clamp(40px, 8vw, 60px);
        line-height: 55px;
        `,
    
    welcomeEmphasis: css`
        color: #80d8ff;
        font-weight: 500;
        text-shadow: 3px 3px 3px #181818;
    `,
    
    about: css`
        position: relative;
        transform: translate(0, -50%);
        top: 50%;
        font-size: clamp(16px, 3vw, 30px);
        text-align: center;
        color: #FFFFFF;
        padding: 10px 30px 80px 30px;
        text-shadow: 2px 2px 4px #181818;
    `,

    aboutEmphasis: css`
        color: #80d8ff;
        font-weight: 500;
    `,

    aboutBack: css`
        background-color: #404040;
        padding: 15px 10px 15px 10px;
        border-radius: 5px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
        margin-top: 35px;
    `,

    sectionHeader: css`
        font-family: 'Rock Salt', cursive;
        font-size: 150%;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    `,

    projectHeader: css`
        font-family: 'Rock Salt', cursive;
        font-size: 150%;
        text-shadow: 3px 3px 3px #181818;
    `,

    sectionDivider: css`
        &:before {
            border-top: thin solid white;
        }

        &:after {
            border-top: thin solid white;
        }
    `,
  
    connectDivider: css`
        border-right: thin solid #B3B3B3;
    `,

    card: css`
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: #404040;
    `,

    cardMedia: css`
        height: 200px;
    `,

    buttonContainer: css`
        width: 100%;
        margin-top: -30px;
    `,

    infoContainer: css`
        margin-bottom: 10px;
    `,

    card1: css`
        display: flex;
        flex-direction: column;
        background-color: #404040;
        margin-top: 35px;
        margin-bottom: 35px;
    `,

    tweetCard: css`
        background-color: #404040;
        padding: 10px;
        margin-bottom: 35px;
    `

}