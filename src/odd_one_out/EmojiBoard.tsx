import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from 'remotion'

function cyrb128(str: any) {
  let h1 = 1779033703, h2 = 3144134277,
    h3 = 1013904242, h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
  return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
}
function sfc32(a: any, b: any, c: any, d: any) {
  return function () {
    a |= 0; b |= 0; c |= 0; d |= 0;
    let t = (a + b | 0) + d | 0;
    d = d + 1 | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  }
}
type Props = {
  emoji: string
  replace: string,
  trans: string,
  time_to_guess: GLint,
}
// ["rotate", "(90deg)"]
const transforms = [["saturate", "(30%)"], ["hue-rotate", "(20deg)"], ["contrast", "(150%)"], ["grayscale", "(70%)"], ["brightness", "(0.6)"], ["font", "noto"]]
export const EmojiBoard: React.FC<Props> = ({ emoji, replace, trans, time_to_guess }) => {
  const width = 1920 * 0.8
  const height = 1080 * 0.7
  var seed = cyrb128(emoji + replace);
  var rand = sfc32(seed[0], seed[1], seed[2], seed[3]);
  let size_x = 7
  let size_y = 15
  let arr = Array(size_x * size_y).fill(emoji)
  let replace_index = Math.floor(rand() * arr.length)
  arr[replace_index] = replace

  let emoji_size = (width - 50) / 15
  const frame = useCurrentFrame();

  let transform_arr = Array(1)
  if (trans == "true") {
    transform_arr = transforms[Math.floor(rand() * transforms.length)]
  }

  return (
    <>
      <AbsoluteFill
        style={{
          height: height + "px",
          width: width + "px",
          backgroundColor: "white",
          left: "50%",
          top: "48%",
          transform: "translate(-50%,-50%)",
          borderRadius: "50px",
          boxShadow: "rgba(50,50,50,.5) 15px 15px 5px",
          justifyContent: "center",
          alignItems: "center"

        }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(" + size_y + "," + emoji_size + "px)",

        }}>
          {arr.map((item, i) => {
            return (
              <div key={item + i} style={{
                display: 'flex',
                alignItems: "center",
                justifyContent: "center",
                width: emoji_size,
                height: emoji_size,
                fontSize: emoji_size - 20,
                fontFamily: "noto",
                opacity: i == replace_index ? 1 : interpolate(frame, [0, time_to_guess - 1, time_to_guess + 20], [1, 1, 0.6], { extrapolateRight: "clamp", easing: Easing.elastic(1) }),
                transform: i == replace_index ? "scale(" + interpolate(frame, [0, time_to_guess - 1, time_to_guess + 20], [1, 1, 1.5], { extrapolateRight: "clamp", easing: Easing.elastic(1.3) }) + ")" : "scale(1)",
                zIndex: i == replace_index ? 1000 : 1,
              }}>
                <span style={{
                  textAlign: "center",
                  filter: i == replace_index && ["saturate", "hue-rotate", "contrast", "grayscale", "brightness"].includes(transform_arr[0]) ? transform_arr[0] + transform_arr[1] : "contrast(1)",
                  transform: i == replace_index && ["rotate"].includes(transform_arr[0]) ? transform_arr[0] + transform_arr[1] : "rotate(0deg)",
                  fontFamily: i == replace_index && ["font"].includes(transform_arr[0]) ? "lucky" : "noto",
                }}>{item}</span></div>
            )
          })}
        </div>
      </AbsoluteFill>

    </>
  );
};