import {Audio, staticFile, Sequence } from "remotion";
import { getAudioDurationInSeconds } from "@remotion/media-utils";
import { useEffect, useCallback } from 'react'

type Props = {
  tp: string,
  rn: GLfloat,
  index: GLint,
  time_to_guess: GLint,
}

// const general_lines = ['Be carefull on this one.wav', 'Do you know this.wav', 'Give it your best!.wav', 'How about this one.wav', 'Next one!.wav', 'This quiz might stump some of you.wav']
let end_lines = ['Amazing!.wav', 'Bingo!.wav', 'Fantastic!.wav', 'Good job!.wav', 'Great job!.wav', 'Nice one!.wav', "That's right!.wav", 'Well Done!.wav', 'You got it!.wav']
let selected = ""
let publicFile = 1
export const PlayAudioEndScene: React.FC<Props> = ({ tp, rn, index, time_to_guess }) => {

  if (tp == "guess_emoji" || tp == "guess_emoji_img") {
    selected = end_lines[Math.floor(rn * end_lines.length)]

    const getDuration = useCallback(async () => {
      publicFile = await getAudioDurationInSeconds(
        staticFile("generated_lines/" + index + ".wav"),
      ); // 33.221. Returns secconds
    }, []);

    useEffect(() => {
      getDuration();
    }, []);

  }
  if (tp == "odd_emoji") {
    selected = end_lines[Math.floor(rn * end_lines.length)]
  }

  if (["guess_emoji_img", "guess_emoji"].includes(tp)) {
    return (
      <>

        <Sequence from={time_to_guess + 20}>
          <Audio volume={1.5} src={staticFile("generated_lines/" + index + ".wav")}></Audio>
        </Sequence>
        <Sequence from={Math.ceil(publicFile) * 30 + 20 + time_to_guess}>
          <Audio volume={1} src={staticFile("generated_initial_lines/correct/" + selected)}></Audio>
        </Sequence>
      </>
    );
  }
  else if (tp == "odd_emoji") {
    return (
      <>
        <Sequence from={time_to_guess + 25}>
          <Audio volume={1} src={staticFile("generated_initial_lines/correct/" + selected)}></Audio>
        </Sequence>
      </>
    )
  }
  else {
    return (<></>)
  }
};