import { Audio, staticFile } from "remotion";

type Props = {
  index: GLint,
}

export const PlayAudio: React.FC<Props> = ({ index }) => {
  return (
    <>
      <Audio volume={1} src={staticFile("generated_lines/" + index + ".wav")}></Audio>
    </>
  );

};