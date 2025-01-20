import { AbsoluteFill, interpolate, useCurrentFrame, staticFile, Img, Easing } from "remotion";

type Props = {
  img_index: GLint,
  time_to_guess: GLint,
}
export const DisplayImg: React.FC<Props> = ({ img_index, time_to_guess }) => {
  const frame = useCurrentFrame();

  return (

    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        fontFamily: "lucky",
        fontSize: 150,
        color: "yellow",
        top: "50%",
        left: "-20%",
        transform: "translateY(-50%) rotate3d(2,1,2," + 2 * Math.sin(frame / 20 + Math.sin(frame / 20) * Math.cos(frame / 20)) + "deg)",
        lineHeight: "1.2em",
        textShadow: "rgba(50,50,50,.5) 10px 10px 0px ",
      }}
    >
      <div style={{
      }}>
        <Img src={staticFile("/generated_images/" + img_index + ".jpg")}
          style={{
            boxShadow: "rgba(50,50,50,.5) 0px 15px 0px",
            backgroundColor: "white",
            maxWidth: "850px",
            maxHeight: "550px",
            objectFit: "scale-down",
            transformOrigin: "50% 0% 0",
            transform: "scale(" + interpolate(frame, [0, time_to_guess - 1, time_to_guess + 20], [1, 1, 1.4], { extrapolateRight: "clamp", easing: Easing.elastic(1.3) }) + ")",
            border: "15px white solid",
            borderRadius: "100px",
          }}></Img>
      </div>
    </AbsoluteFill>
  );
};