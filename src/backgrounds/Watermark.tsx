import { AbsoluteFill, Img, staticFile } from "remotion";

type Props = {
  watermark_name: string,
}

export const Watermark:React.FC<Props> = ({watermark_name}) => {
  return (
    <AbsoluteFill
      style={{
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "alte",
        fontSize: 35,
        color: "rgba(255,255,255,.8)",
        top: "0px",
        zIndex: 1,
        opacity: "0.6",
      }}
    >
      <AbsoluteFill style={{ left: "1847px", top: "620px" }}>
        <Img style={{ filter: "invert(100%)", width: "55px", transform: "rotate(-0.25turn)" }} src={staticFile("/images/youtube_icon.png")}></Img>
      </AbsoluteFill>
      <AbsoluteFill style={{ left: "1430px", top: "-50px", transform: "rotate(-0.25turn)" }}>{watermark_name}</AbsoluteFill>

      <AbsoluteFill style={{ left: "20px", top: "620px" }}>
        <Img style={{ filter: "invert(100%)", width: "55px", transform: "rotate(-0.25turn)" }} src={staticFile("/images/youtube_icon.png")}></Img>
      </AbsoluteFill>
      <AbsoluteFill style={{ left: "-395px", top: "-50px", transform: "rotate(-0.25turn)" }}>{watermark_name}</AbsoluteFill>

    </AbsoluteFill>
  );
};