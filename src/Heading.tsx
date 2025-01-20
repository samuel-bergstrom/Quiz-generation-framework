import { AbsoluteFill, useCurrentFrame } from "remotion";

type Props = {
  title_text: string,
}

export const Heading: React.FC<Props> = ({ title_text }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        textAlign: "center",
        alignItems: "center",
        fontFamily: "lucky",
        fontSize: 120,
        color: "white",
        top: "50px",
        lineHeight: "1.2em",
        textShadow: "rgba(50,50,50,.5) 10px 10px 0px",

      }}
    >
      <div style={{ transform: "rotate(" + 0.7 * Math.sin(frame / 20) + "deg)" }} >{title_text}</div>
    </AbsoluteFill>
  );
};