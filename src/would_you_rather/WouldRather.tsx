import { Counter } from '../Counter'
import { Heading } from '../Heading'
import { ShowImage } from './ShowImage'
import { PlayAudio } from './PlayAudio'
import { ProgressBar } from '../ProgressBar'
import { Sequence } from 'remotion'

type Props = {
  i: GLint;
  item: Array<string>;
  title_text: string;
  time_to_guess: GLint;
}
export const WouldRather: React.FC<Props> = ({ i, title_text, item, time_to_guess }) => {
  return (
    <>
      <Counter index={i + 1}></Counter>
      <Heading title_text={"Would you rather"}></Heading>
      <ProgressBar time_to_guess={time_to_guess}></ProgressBar>
      <ShowImage alt1={item[1]} alt2={item[2]} per1={item[3]} per2={item[4]} index={i} time_to_guess={time_to_guess} ></ShowImage>
      <Sequence from={30}>
        <PlayAudio index={i}></PlayAudio>
      </Sequence>

    </>
  );
};