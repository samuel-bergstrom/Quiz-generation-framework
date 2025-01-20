import { AbsoluteFill, interpolate, useCurrentFrame, Sequence, staticFile, Audio, Img, Easing } from "remotion";

type Props = {
  alt1: string,
  alt2: string,
  per1: string,
  per2: string,
  index: GLint,
  time_to_guess: GLint
}
export const ShowImageMusic: React.FC<Props> = ({ alt1, alt2, per1, per2, index, time_to_guess }) => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        gridTemplateColumns: "repeat(2, 1fr)",
        display: "grid",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "lucky",
        fontSize: 50,
        color: "yellow",
        lineHeight: "1.2em",
        textShadow: "rgba(50,50,50,.5) 2px 2px 0px ",
        width: "85%",
        left: "50%",
        transform: "translateX(-50%) scale(" + interpolate(frame, [10, 30, time_to_guess, time_to_guess + 20], [0, 1, 1, 1.1], {
          easing: Easing.elastic(1.5),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp"
        }) + ")"
      }}
    >
      <div style={{}}>
        <div style={{
          position: "relative",
          transform: "rotate3d(5,5,1," + 5 * Math.sin(frame / 20 + Math.sin(frame / 20) * Math.cos(frame / 20)) + "deg) translateX(-50%)",
          width: "700px",
          height: "600px",
          left: "50%",
          transformOrigin: "center center",
        }}>
          <Img src={staticFile("generated_images/" + index + "_0.jpg")}
            style={{
              width: "700px",
              height: "600px",
              objectFit: "cover",
              border: "20px white solid",
              borderRadius: "60px",
            }}>
          </Img>
          <div style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: 0,
            backgroundColor: "white",
            zIndex: 5,
            width: "700px",
            height: interpolate(frame, [0, time_to_guess, time_to_guess + 20], [0, 0, 600 * Number(per1.replace("%", " ")) / 100], {
              easing: Easing.elastic(1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }) + "px",
            opacity: interpolate(frame, [0, time_to_guess, time_to_guess + 10], [0, 0, 0.8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }),
            borderRadius: "60px",
          }}
          ><p style={{
            color: "black",
            opacity: 1,
            transform: "scale(" + interpolate(frame, [0, time_to_guess + 10, time_to_guess + 25], [0, 0, 1.7], {
              easing: Easing.elastic(1.5),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }) + ")"
          }}>{per1}</p>
          </div>
          <div style={{
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Alte",
            fontSize: alt1.length > 40 ? 50 - alt1.length / 6 : 50,
            color: "black",
            backgroundColor: "white",
            position: "absolute",
            width: "600px",
            padding: "20px",
            left: "50%",
            top: interpolate(frame, [0, time_to_guess, time_to_guess + 5], [520 - alt1.length * 1.5, 520 - alt1.length * 1.5, 650 - alt1.length * 1.5], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }) + "px",
            borderRadius: "30px",
            transform: "translateX(-50%) rotate3d(2,5,1," + 7 * Math.sin((5 + frame) / 20 + Math.sin((5 + frame) / 20) * Math.cos((5 + frame) / 20)) + "deg) scale(" + (1 + 0.03 * Math.abs(Math.sin((20 + frame) / 40))) + ")"
          }}

          >{alt1}</div>
        </div>
      </div>

      <Sequence from={time_to_guess + 20}>
        <Audio startFrom={100} endAt={260} volume={.3}
          src={staticFile("generated_music/" + index + ".mp3")}  ></Audio>
      </Sequence>
      <div style={{
        transform: "scale(" + interpolate(frame, [0, 30, 50], [0, 0, 1], {
          easing: Easing.elastic(1.5),
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp"
        }) + ")"
      }}>
        <div style={{
          position: "relative",
          transform: "rotate3d(5,8,1," + 5 * Math.sin((30 + frame) / 20 + Math.sin((30 + frame) / 20) * Math.cos((30 + frame) / 20)) + "deg) translateX(-50%)",
          width: "700px",
          height: "600px",
          left: "50%",
          transformOrigin: "center center",
        }}>
          <Img src={staticFile("generated_images/" + index + "_1.jpg")}
            style={{
              width: "700px",
              height: "600px",
              objectFit: "cover",
              border: "20px white solid",
              borderRadius: "60px",
            }}>
          </Img>
          <div style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            bottom: 0,
            backgroundColor: "white",
            zIndex: 5,
            width: "700px",
            height: interpolate(frame, [0, time_to_guess, time_to_guess + 20], [0, 0, 600 * Number(per2.replace("%", " ")) / 100], {
              easing: Easing.elastic(1),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }) + "px",
            opacity: interpolate(frame, [0, time_to_guess, time_to_guess + 10], [0, 0, 0.8], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }),
            borderRadius: "60px",
          }}
          ><p style={{
            position: "relative",
            color: "black",
            opacity: 1,
            transform: "scale(" + interpolate(frame, [0, time_to_guess + 10, time_to_guess + 25], [0, 0, 1.7], {
              easing: Easing.elastic(1.5),
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }) + ")"
          }}>{per2}</p>
          </div>
          <div style={{
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Alte",
            fontSize: alt2.length > 40 ? 50 - alt2.length / 6 : 50,
            color: "black",
            backgroundColor: "white",
            position: "absolute",
            width: "600px",
            padding: "20px",
            left: "50%",
            top: interpolate(frame, [0, time_to_guess, time_to_guess + 5], [520 - alt2.length * 1.5, 520 - alt2.length * 1.5, 650 - alt2.length * 1.5], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp"
            }) + "px",
            borderRadius: "30px",
            transform: "translateX(-50%) rotate3d(2,5,1," + 7 * Math.sin((16 + frame) / 20 + Math.sin((16 + frame) / 20) * Math.cos((16 + frame) / 20)) + "deg) scale(" + (1 + 0.03 * Math.abs(Math.sin((20 + frame) / 40))) + ")"
          }}

          >{alt2}</div>
        </div>
      </div>
    </AbsoluteFill>
  );
};