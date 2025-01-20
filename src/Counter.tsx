import { AbsoluteFill, useCurrentFrame } from "remotion";
type Props = {
  index: GLint,
}
export const Counter: React.FC<Props> = ({ index }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        textAlign: "center",
        justifyContent: "center",
        fontFamily: "lucky",
        fontSize: 90,
        color: "white",
        lineHeight: "1.2em",
        textShadow: "rgba(50,50,50,.5) 4px 4px 0px ",
        width: "130px",
        height: "130px",
        margin: "30px",
        borderRadius: "50%",
        boxShadow: "rgba(50,50,50,.5) 5px 5px 3px",
        background: "linear-gradient(to bottom, rgba(230, 70, 32, 1) 0%, rgba(175, 25, 30, 1) 100%)",
        transform: "rotate(" + 3 * Math.sin(frame / 30 + Math.cos(frame / 30) * Math.sin(frame / 30)) + "deg)"
      }}>
      {index}
    </AbsoluteFill>
  );
};