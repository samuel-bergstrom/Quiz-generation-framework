import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
type Props = {
  color_num: GLint,
}
var color_list = ["#6aba0f", "#8338ec", "#0077b6", "#ee9b00", "#ffd60a", "#ff99c8", "#3bf4fb", "#826aed"]

export const ConicalBackground: React.FC<Props> = ({ color_num }) => {
  const frame = useCurrentFrame();

  return (
    <>
      <AbsoluteFill
        style={{
          zIndex: "-1",
          background: "repeating-conic-gradient(from " + interpolate(frame, [0, 1300], [0, 360]) + "deg, rgba(150,150,150,0.3) 0deg 15deg, rgba(150,150,150,0.1) 15deg 30deg)"
        }}>
      </AbsoluteFill>

      <AbsoluteFill
        style={{
          zIndex: "-2",
          backgroundColor: color_list[color_num],
        }}
      ></AbsoluteFill>
    </>
  );
};