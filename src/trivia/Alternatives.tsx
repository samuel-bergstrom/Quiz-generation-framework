import { AbsoluteFill, useCurrentFrame, staticFile, interpolate, Audio, interpolateColors, Easing, Sequence } from "remotion";

type Props = {
  alternatives: Array<string>,
  keys: Array<string>,
  time_to_guess: GLint,
  index: GLint,
}

const options_list = ["A", "B", "C"]
export const Alternatives: React.FC<Props> = ({ alternatives, keys, time_to_guess, index }) => {
  const frame = useCurrentFrame();
  return (
    <>
      <Sequence from={time_to_guess + 20} >
        <Audio volume={1} src={staticFile("generated_lines/correct/" + index + ".wav")} />
      </Sequence>
      {alternatives.map((alternative, i) => {
        return (
          <AbsoluteFill key={"alt" + i}
            style={{
              alignItems: "center",
              top: (300 + 5 * Math.sin(frame / 20)) + i * interpolate(frame, [0, time_to_guess - 1, time_to_guess + 20], [170, 170, 180], { extrapolateRight: "clamp", easing: Easing.elastic(1.3) }) + "px",
              left: "460px",
            }}>

            <div style={{
              opacity: keys[i] == "true" ? 1 : + interpolate(frame, [0, time_to_guess - 1, time_to_guess + 20], [1, 1, 0.7], { extrapolateRight: "clamp", easing: Easing.elastic(1.3) }),
              display: "grid",
              gridTemplateColumns: "1fr 4fr",
              justifyContent: "center",
              alignItems: "center",
              height: keys[i] == "true" ? + "0px" : "130px",
              width: "750px",
              backgroundColor: "white",
              fontFamily: "alte",
              transformOrigin: "700px",
              transform: keys[i] == "true" ? "scale(" + interpolate(frame, [0, time_to_guess - 1, time_to_guess + 20], [1, 1, 1.3], { extrapolateRight: "clamp", easing: Easing.elastic(1.3) }) + ")" : "scale(1)",
              fontSize: Math.max(75 - alternative.length, 35),
              color: "black",
              borderRadius: "100px 55px 55px 100px ",
              // textShadow: "rgba(50,50,50,.5) 2px 2px 0px",
              boxShadow: "rgba(50,50,50,.5) 0px 15px 0px",
            }}
            >
              <div style={{
                display: "flex",
                borderRadius: "50%",
                backgroundColor: keys[i] == "true" ? interpolateColors(frame, [0, time_to_guess - 1, time_to_guess], ["red", "red", "green"]) : "red",
                height: "115px",
                width: "115px",
                zIndex: 1,
                margin: "5px",
                color: "white",
                fontSize: 75,
                justifyContent: "center",
                alignItems: "center",

              }}>
                {options_list[i]}
              </div>
              {alternative}
            </div>
          </AbsoluteFill>
        )
      })}
    </>

  );
};