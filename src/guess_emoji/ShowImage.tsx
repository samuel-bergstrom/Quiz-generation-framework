import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring, staticFile, Img } from "remotion";


type Props = {
  answer: string,
  index: GLint,
}

export const ShowImage: React.FC<Props> = ({ answer, index }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();
  const driver = spring({
    frame,
    fps
  });

  return (
    <AbsoluteFill
      style={{
        textAlign: "center",
        fontFamily: "lucky",
        fontSize: 150,
        color: "yellow",
        top: interpolate(driver, [0, 1], [800, 50]) + "px",
        lineHeight: "1.2em",
        textShadow: "rgba(50,50,50,.5) 10px 10px 0px ",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "75%", width: "1900px", }}>{answer}</div>
      <div style={{
      }}>
        <Img src={staticFile("generated_images/" + index + ".jpg")}
          style={{
            maxHeight: "1000px",
            objectFit: "cover",
            marginBottom: "100px",
            borderRadius: "100px",
          }}></Img>
      </div>
    </AbsoluteFill>
  );
};