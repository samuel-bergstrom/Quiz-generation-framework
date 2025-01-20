import { AbsoluteFill, useCurrentFrame, Audio, staticFile, Sequence } from "remotion";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { useEffect, useCallback } from 'react'
type Props = {
  title_text: string,
  index: GLint,
}

let publicFile = 0
export const Heading: React.FC<Props> = ({ title_text, index }) => {
  const frame = useCurrentFrame();
  const getDuration = useCallback(async () => {
    publicFile = await getAudioDurationInSeconds(
      staticFile("generated_lines/questions/" + index + ".wav"),
    );
  }, []);

  useEffect(() => {
    getDuration();
  }, []);
  return (
    <AbsoluteFill
      style={{
        textAlign: "center",
        alignItems: "center",
        fontFamily: "alerion",
        fontSize: 150 - Math.sqrt(title_text.length) * 10,
        color: "white",
        left: "52%",
        maxWidth: "1650px",
        transform: "translateX(-50%)",
        top: "50px",
        lineHeight: "1.2em",
        textShadow: "rgba(50,50,50,.5) 0px 10px 0px",

      }}
    >
      <Sequence from={5}>
        <Audio volume={1} src={staticFile("generated_lines/questions/" + index + ".wav")} />
      </Sequence>
      <Sequence from={Math.floor(publicFile) * 30 + 30}>
        <Audio volume={1} src={staticFile("generated_lines/alternatives/" + index + ".wav")} />
      </Sequence>
      <div style={{ transform: "rotate(" + 0.7 * Math.sin(frame / 20) + "deg)" }} >{title_text}</div>
    </AbsoluteFill>
  );
};