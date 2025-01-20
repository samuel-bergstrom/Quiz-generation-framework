import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig } from "remotion";
import { Watermark } from "./Watermark"
var color_list = ["#6aba0f", "#8338ec", "#0077b6", "#ee9b00", "#ffd60a", "#ff99c8", "#3bf4fb", "#826aed"]


type Props = {
  color_num: GLint,
  watermark_name: string
  use_watermark: boolean
}

export const Background: React.FC<Props> = ({ color_num, use_watermark, watermark_name }) => {

  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  var speed_of_circle = 5
  var circle_interval = 4 * 30
  let number_of_circles = 0
  var border_width = 150
  var middle_offset = 300
  var opacity = 0.1
  var color = color_list[color_num]
  number_of_circles = Math.ceil(durationInFrames / circle_interval)

  return (
    <>
      {use_watermark && <Watermark watermark_name={watermark_name}></Watermark>}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "alte",
          fontSize: 300,
          backgroundColor: color,
        }}
      >
      </AbsoluteFill>
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: (frame) * speed_of_circle + middle_offset + 4 * speed_of_circle * circle_interval + "px",
        width: (frame) * speed_of_circle + middle_offset + 4 * speed_of_circle * circle_interval + "px",
        borderRadius: "100%",
        border: border_width + "px solid #000000",
        opacity: opacity,
      }}>
      </AbsoluteFill>
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: (frame) * speed_of_circle + middle_offset + 3 * speed_of_circle * circle_interval + "px",
        width: (frame) * speed_of_circle + middle_offset + 3 * speed_of_circle * circle_interval + "px",
        borderRadius: "100%",
        border: border_width + "px solid #000000",
        opacity: opacity,
      }}>
      </AbsoluteFill>
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: (frame) * speed_of_circle + middle_offset + 2 * speed_of_circle * circle_interval + "px",
        width: (frame) * speed_of_circle + middle_offset + 2 * speed_of_circle * circle_interval + "px",
        borderRadius: "100%",
        border: border_width + "px solid #000000",
        opacity: opacity,
      }}>
      </AbsoluteFill>
      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        height: (frame) * speed_of_circle + middle_offset + 1 * speed_of_circle * circle_interval + "px",
        width: (frame) * speed_of_circle + middle_offset + 1 * speed_of_circle * circle_interval + "px",
        borderRadius: "100%",
        border: border_width + "px solid #000000",
        opacity: opacity,
      }}>
      </AbsoluteFill>
      {new Array(number_of_circles).fill(true).map((_, i) => {
        var current_time = i * circle_interval
        return (
          <Sequence key={"n" + i} from={i * circle_interval}>
            <AbsoluteFill key={"abb" + i} style={{
              justifyContent: "center",
              alignItems: "center",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              height: (frame - current_time) * speed_of_circle + middle_offset + "px",
              width: (frame - current_time) * speed_of_circle + middle_offset + "px",
              borderRadius: "100%",
              border: border_width + "px solid #000000",
              opacity: opacity,
            }}>
            </AbsoluteFill>
          </Sequence>
        )
      })}
    </>
  );
};