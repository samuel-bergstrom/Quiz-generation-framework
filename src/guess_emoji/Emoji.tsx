import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";
import { toArray } from "lodash"

type Props = {
  emoji: string;
}


export const Emoji: React.FC<Props> = ({ emoji }) => {
  const emoji_list = toArray(emoji)
  const num_emojis = emoji_list.length
  const frame = useCurrentFrame()
  return (
    <AbsoluteFill
      style={{
        width: Math.min(100, num_emojis * 30) + "%",
        fontSize: 350 + 60 - (num_emojis * 30),
        gridTemplateColumns: "repeat(" + num_emojis + ", 1fr)",
        display: "grid",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        textShadow: "0 0 2px white, -10px -10px 2px white, -10px 10px 2px white, 10px 10px 2px white, 10px -10px 2px white",
        filter: "saturate(1.2) contrast(1.2)",
      }}
    >
      {emoji_list.map((emoji, i) => {
        return (
          <div key={"n" + i} style={{
            transform: "rotate(" + 2.5 * Math.sin(frame / 15 + i + Math.cos(frame / 15 + i) * Math.sin(frame / 15 + i)) + "deg) scale(" + interpolate(frame, [0, 30], [10, 100], {
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
  );
};