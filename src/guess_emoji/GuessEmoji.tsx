import { Counter } from '../Counter'
import { Heading } from '../Heading'
import { ProgressBar } from '../ProgressBar'
import { Sequence } from 'remotion'
import { Emoji } from './Emoji'
import { Answer } from './Answer'
type Props = {
  i: GLint;
  item: Array<string>;
  title_text: string;
  time_to_guess: GLint;
}
export const GuessEmoji: React.FC<Props> = ({ i, title_text, item, time_to_guess }) => {
  return (
    <>
      <Counter index={i + 1}></Counter>
      <Heading title_text={title_text}></Heading>
      <Emoji emoji={item[2]}></Emoji>
      <ProgressBar time_to_guess={time_to_guess}></ProgressBar>
      <Sequence from={time_to_guess + 10}>
        <Answer answer={item[1]} index={i}></Answer>
      </Sequence>
    </>
  );
};