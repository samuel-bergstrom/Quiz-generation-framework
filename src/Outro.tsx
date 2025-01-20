import { AbsoluteFill, staticFile, Audio, Sequence } from "remotion";
import { IntroBackground } from "./backgrounds/IntroBackground"

export const Outro = () => {
  return (
    <>
      <Sequence from={40}>
        <Audio src={staticFile("sounds/outro.wav")}></Audio>
      </Sequence>
      <IntroBackground></IntroBackground>
      <AbsoluteFill
        style={{
          textAlign: "center",
          alignItems: "center",
          fontFamily: "lucky",
          fontSize: 150,
          color: "white",
          top: "20px",
          lineHeight: "1.2em",
          textShadow: "rgba(50,50,50,.5) 10px 10px 0px",
          zIndex: 1,
        }}
      >Thanks for Watching</AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: "#ac0",
          backgroundImage: "-webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)), color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent), to(transparent))",
          backgroundImage: "-moz-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
          backgroundImage: "-o-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
          backgroundImage: "linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
          backgroundSize: "200px 200px",
          width: "720px",
          height: "405px",
          top: "18%",
          left: "10%",
          lineHeight: "1.2em",
          textShadow: "rgba(50,50,50,.5) 10px 10px 0px",
          zIndex: 1,
          border: "10px solid black",
          borderRadius: "50px"

        }}
      >
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          backgroundColor: "#d92626",
          backgroundImage: "-webkit-gradient(linear, 0 100%, 100% 0, color-stop(.25, rgba(255, 255, 255, .2)), color-stop(.25, transparent), color-stop(.5, transparent), color-stop(.5, rgba(255, 255, 255, .2)), color-stop(.75, rgba(255, 255, 255, .2)), color-stop(.75, transparent), to(transparent))",
          backgroundImage: "-moz-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
          backgroundImage: "-o-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
          backgroundImage: "linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%, transparent 75%, transparent)",
          backgroundSize: "200px 200px",
          width: "720px",
          height: "405px",
          top: "18%",
          left: "53%",
          lineHeight: "1.2em",
          textShadow: "rgba(50,50,50,.5) 10px 10px 0px",
          zIndex: 1,
          border: "10px solid black",
          borderRadius: "50px"
        }}
      >
      </AbsoluteFill>
    </>
  );
};