import { Counter } from '../Counter'
import { Heading } from '../Heading'
import { PlayAudio } from './PlayAudio'
import { ProgressBar } from '../ProgressBar'
import { Sequence } from 'remotion'
import { ShowImageMusic } from './ShowImageMusic'

type Props = {
  i: GLint;
  item: Array<string>;
  title_text: string;
  time_to_guess: GLint;
}
export const WouldMusic: React.FC<Props> = ({ i, title_text, item, time_to_guess }) => {
  return (
    <>
      <Counter index={i + 1}></Counter>
      <Heading title_text={"Would You Rather..."}></Heading>
      <ProgressBar time_to_guess={time_to_guess}></ProgressBar>
      <ShowImageMusic alt1={item[1]} alt2={item[2]} per1={item[3]} per2={item[4]} index={i} time_to_guess={time_to_guess} ></ShowImageMusic>
      <Sequence from={30}>
        <PlayAudio index={i}></PlayAudio>
      </Sequence>
    </>
  );
};