import { AbsoluteFill, interpolate, useCurrentFrame, Easing, Audio, Sequence, staticFile, interpolateColors } from "remotion";
type Props = {
  time_to_guess: GLint,
}

export const ProgressBar: React.FC<Props> = ({ time_to_guess }) => {
  const tick_time = time_to_guess - 42
  const frame = useCurrentFrame();

  var height = "110px"
  var border_radius = "100px"

  const color1 = interpolateColors(frame, [0, tick_time - 30, tick_time - 29, time_to_guess - 30, time_to_guess - 29, time_to_guess], ["rgb(136,252,3)", "rgb(136,252,3)", "rgb(245, 233, 0)", "rgb(245, 233, 0)", "rgb(125, 5, 11)", "rgb(125, 5, 11)"])
  const color2 = interpolateColors(frame, [0, tick_time - 30, tick_time - 29, time_to_guess - 30, time_to_guess - 29, time_to_guess], ["rgb(88,166,3)", "rgb(88,166,3)", "rgb(176, 167, 0)", "rgb(176, 167, 0)", "rgb(227, 9, 20)", "rgb(227, 9, 20)"])
  const finished_pop_up = 30
  return (
    <AbsoluteFill style={{
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      top: interpolate(frame, [0, finished_pop_up, time_to_guess, time_to_guess + 15], [1520, 930, 930, 2020], {
        easing: Easing.elastic(0.1),
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp"
      }) + "px",
      width: "70%",
      height: height,
      boxSizing: "border-box",
      border: "solid 0.2em #EEE",
      // #242b35
      font: "clamp(.625em, 7.5vw, 5em) monospace",
      borderRadius: border_radius,
      backgroundColor: "lightgray",
      transform: "rotate(" + Math.sin(frame / 20) / 5 + "deg)",
    }}>
      <Sequence from={10}>
        <Audio volume={0.3} src={staticFile("sounds/happy-pop-1.mp3")} />
      </Sequence>
      <Sequence from={12}>
        <Audio volume={0.3} src={staticFile("sounds/happy-pop-2.mp3")} />
      </Sequence>
      <Sequence from={14}>
        <Audio volume={0.3} src={staticFile("sounds/happy-pop-3.mp3")} />
      </Sequence>

      <Sequence from={tick_time} durationInFrames={time_to_guess - tick_time}>
        <Audio volume={0.10} playbackRate={1} src={staticFile("sounds/clock-ticking120bpm.wav")} />
      </Sequence>
      <Sequence from={time_to_guess + 5}>
        <Audio volume={1} playbackRate={1} src={staticFile("sounds/magic_sparkle_ding.mp3")} />
      </Sequence>

      <AbsoluteFill
        // PATTERN
        style={{
          zIndex: 0,
          width: interpolate(frame, [finished_pop_up, time_to_guess - 12], [100, 6], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp"
          }) + "%",
          borderRadius: border_radius,
          background: "repeating-linear-gradient(135deg, " + color1 + " 0 40px," + color2 + " 0 80px) 0/0% no-repeat",
          backgroundSize: interpolate(frame, [0, time_to_guess - 12, time_to_guess], [100, 99, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp"
          }) + "%",
        }}>
      </AbsoluteFill>
      <AbsoluteFill style={{
        // GLOSSY LOOK
        width: "100%",
        borderRadius: border_radius,
        background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
        zIndex: 1,
      }}>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};