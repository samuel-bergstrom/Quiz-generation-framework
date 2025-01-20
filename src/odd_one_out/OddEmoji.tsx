import { Counter } from '../Counter'
import { Heading } from './Heading'
import { ProgressBar } from './EmojiProgressBar'
import { EmojiBoard } from './EmojiBoard'

type Props = {
  i: GLint;
  item: Array<string>;
  title_text: string;
  time_to_guess: GLint;
}
export const OddEmoji: React.FC<Props> = ({ i, title_text, item, time_to_guess }) => {
  return (
    <>
      {/* <Background color_num = {i % 7} ></Background> */}
      <Counter index={i + 1}></Counter>
      <Heading title_text={"Find the odd one out"}></Heading>
      <ProgressBar time_to_guess={time_to_guess}></ProgressBar>
      <EmojiBoard emoji={item[1]} replace={item[2]} trans={item[3]} time_to_guess={time_to_guess}></EmojiBoard>
    </>
  );
};