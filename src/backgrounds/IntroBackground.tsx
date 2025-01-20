import { AbsoluteFill, useCurrentFrame, interpolate, Img, staticFile } from "remotion";

export const IntroBackground = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <AbsoluteFill>
        <Img style={{ width: "100%", opacity: ".1", filter: "invert(1)" }} src={staticFile("/images/stripes" + (Math.ceil((frame + 0.01) / 40 % 2)) + ".png")}></Img>
      </AbsoluteFill>
      <AbsoluteFill
        style={{ zIndex: "-1", background: "repeating-conic-gradient(from " + interpolate(frame, [0, 1000], [0, 360]) + "deg, #427DFA 0deg 12deg, #327DEA 12deg 15deg, #4786FB 15deg 30deg)" }}>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Img style={{
          transform: "scale(1.4) rotate(" + interpolate(frame, [0, 1000], [0, 360]) + "deg)",
          opacity: "0.25"
        }}
          src={staticFile("/images/dotted_background.png"
          )}></Img>
      </AbsoluteFill>
    </>
  );
};