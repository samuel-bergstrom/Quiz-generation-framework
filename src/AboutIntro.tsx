import { AbsoluteFill, useCurrentFrame, staticFile, interpolate, Easing, Audio, Sequence } from "remotion";
import { toArray } from "lodash"

type Props = {
  intro_about_text: string,
  intro_about_emojis: string,
  number_of_questions: GLint,
}

export const AboutIntro: React.FC<Props> = ({ intro_about_text, intro_about_emojis, number_of_questions }) => {
  const frame = useCurrentFrame();
  const emoji_list = toArray(intro_about_emojis)
  const num_emojis = emoji_list.length
  return (
    <>

      <Sequence from={20}>
        <Audio volume={0.3} src={staticFile("sounds/happy-pop-1.mp3")} />
      </Sequence>
      <Sequence from={22}>
        <Audio volume={0.3} src={staticFile("sounds/happy-pop-2.mp3")} />
      </Sequence>
      <Sequence from={24}>
        <Audio volume={0.3} src={staticFile("sounds/happy-pop-3.mp3")} />
      </Sequence>
      <Sequence from={30}>
        <Audio volume={0.7} src={staticFile("sounds/intro_about.wav")} />
      </Sequence>

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "lucky",
        textAlign: "center",
        fontSize: 150,
        color: "white",
        textShadow: "rgba(50,50,50,.5) 15px 15px 0px",
        top: "-150px"
      }}
      >
        <div style={{
          fontSize: 175
        }}>{intro_about_text}
        </div>
        <div style={{
          color: "yellow"
        }}>{number_of_questions} Questions</div>
      </AbsoluteFill>

      <AbsoluteFill style={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        left: "50%",
        top: "80%",
        transform: "translate(-50%,-50%)",
        width: Math.min(100, num_emojis * 20) + "%",
        fontSize: 275 + 60 - (num_emojis * 30),
        textShadow: "0 0 2px white, -10px -10px 2px white, -10px 10px 2px white, 10px 10px 2px white, 10px -10px 2px white",
        filter: "saturate(1.2) contrast(1.2)",
        gridTemplateColumns: "repeat(" + num_emojis + ", 1fr)",
        display: "grid",

      }}>
        {emoji_list.map((emoji, i) => {
          return (
            <div style={{
              transform: "rotate(" + 2.5 * Math.sin(frame / 15 + i + Math.cos(frame / 15 + i) * Math.sin(frame / 15 + i)) + "deg) scale(" + interpolate(frame, [20 + 2 * i, i * 2 + 50], [0, 100], {
                easing: Easing.elastic(1),
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp"
              }) + "%)",
              fontFamily: 'noto'
            }}>
              {emoji}
            </div>
          )
        })}
      </AbsoluteFill>
    </>

  );
};