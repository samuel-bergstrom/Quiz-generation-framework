import { AbsoluteFill, useCurrentFrame, staticFile, interpolate } from "remotion";
import { Watermark } from "./Watermark"
var color_list = ["#6aba0f", "#8338ec", "#0077b6", "#ee9b00", "#ffd60a", "#ff99c8", "#3bf4fb", "#826aed"]


type Props = {
  color_num: GLint,
  watermark_name: string,
  use_watermark: boolean,
}

export const CoolBackground: React.FC<Props> = ({ color_num, use_watermark, watermark_name }) => {

  const frame = useCurrentFrame();
  return (
    <>
      {use_watermark && <Watermark watermark_name={watermark_name}></Watermark>}
      <AbsoluteFill
        style={{
          backgroundColor: color_list[color_num],
        }}>
        <AbsoluteFill
          style={{
            transform: "translateX(" + interpolate(frame, [0, 50], [0, 30]) + "px) translateY(" + interpolate(frame, [0, 30], [0, 30]) + "px)" + "scale(50)",
            backgroundImage: "url(" + staticFile("/images/heart.png") + ")",
            backgroundRepeat: "space space",
            backgroundSize: "4px",
            backgroundPosition: "50%",
            filter: "grayscale(100%) blur(0px) brightness(50000) opacity(25%)"
          }}
        ></AbsoluteFill>
      </AbsoluteFill>

    </>
  );
};