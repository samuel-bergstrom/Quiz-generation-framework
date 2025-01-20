import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring, Sequence, staticFile, Audio } from "remotion";

type Props = {
  answer: string,
  index: GLint,
}
export const Answer: React.FC<Props> = ({ answer, index }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const driver = spring({
    frame,
    fps
  });

  return (

    <AbsoluteFill
      style={{
        textAlign: "center",
        fontFamily: "lucky",
        fontSize: 150,
        color: "yellow",
        top: interpolate(driver, [0, 1], [1220, 800]) + "px",
        lineHeight: "1.2em",
        textShadow: "rgba(50,50,50,.5) 10px 10px 0px "
      }}
    >
      {/* <Sequence from={20}>
        <Audio src={staticFile("generated_lines/" + index + ".wav")} />
      </Sequence> */}

      <div style={{}}>{answer}</div>
    </AbsoluteFill>
  );
};