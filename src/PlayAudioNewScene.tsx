import { Audio, staticFile, Sequence } from "remotion";

type Props = {
  tp: string,
  rn: GLfloat
}

const emoji_lines = ['Do you know this.wav', 'Guess by the emojis!.wav', 'Guess this one!.wav', 'How about these emojis.wav', 'Make up your mind.wav', 'This is a hard one!.wav', 'What could this be.wav', 'What do you think of this.wav', 'What is the name of this one.wav', 'What is this.wav']
const odd_one_lines = ['Are you quick enough.wav', 'Can you find it before times up.wav', 'Can you find it.wav', 'Can you find the odd one out.wav', 'Can you see it.wav', 'Do you have sharp vision.wav', 'Do you know where it is.wav', 'Search for the odd one out!.wav', 'Search quickly!.wav']

let selected = ""
export const PlayAudioNewScene: React.FC<Props> = ({ tp, rn }) => {
  const to_play = ["odd_emoji", "guess_emoji_img", "guess_emoji"]

  if (tp == "guess_emoji" || tp == "guess_emoji_img") {
    selected = emoji_lines[Math.floor(rn * emoji_lines.length)]
    tp = "guess_emoji"
  }
  if (tp == "odd_emoji") {
    selected = odd_one_lines[Math.floor(rn * odd_one_lines.length)]
  }
  if (to_play.includes(tp)) {
    return (
      <>
        <Sequence from={20}>
          <Audio volume={1} src={staticFile("generated_initial_lines/" + tp + "/" + selected)}></Audio>
        </Sequence>
      </>
    );
  }
  else {
    return (<></>)
  }
};