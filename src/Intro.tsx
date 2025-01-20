import { AbsoluteFill, useCurrentFrame, staticFile, Img, interpolate, Easing, Audio, Sequence } from "remotion";
import { IntroBackground } from "./backgrounds/IntroBackground"

type Props = {
  logo_path: string,
  intro_text: string
}

export const Intro: React.FC<Props> = ({logo_path, intro_text }) => {
  const frame = useCurrentFrame();
  return (
    <>
      <Audio volume={0.2} src={staticFile("sounds/twinklesparkle.mp3")}></Audio>
      <Sequence from={25}>
        <Audio volume={0.6} src={staticFile("sounds/Intro.wav")}></Audio>
      </Sequence>
      <IntroBackground></IntroBackground>
      <AbsoluteFill
        style={{
          textAlign: "center",
          alignItems: "center",
          fontFamily: "lucky",
          fontSize: 300,
          color: "white",
          top: "625px",
          lineHeight: "1.2em",
          textShadow: "rgba(50,50,50,.5) 10px 10px 0px",
          zIndex: 1,
        }}
      >
        <div style={{
          transform: "rotate(" + Math.sin(frame / 20) + "deg) scale(" + interpolate(frame, [20, 50], [0, .5], {
            easing: Easing.elastic(1),
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp"
          })
        }} >{intro_text}</div>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          top: "-100px"
        }}
      >
        <Img src={staticFile(logo_path)}
          style={{
            transform: "scale(" + interpolate(frame, [0, 45], [0, 0.25], {
              easing: Easing.elastic(2),
              extrapolateRight: "clamp"
            }) + ") rotate(" + interpolate(frame, [0, 35], [90, 0], {
              easing: Easing.elastic(1.3),
              extrapolateRight: "clamp"
            }) + "deg)"
          }}
        />
      </AbsoluteFill>
    </>

  );
};