import { Counter } from '../Counter'
import { Heading } from './Heading'
import { ProgressBar } from '../ProgressBar'
import { Alternatives } from './Alternatives'
import { DisplayImg } from './DisplayImg'

type Props = {
  i: GLint;
  item: Array<string>;
  title_text: string;
  time_to_guess: GLint;
}
export const Trivia: React.FC<Props> = ({ i, title_text, item, time_to_guess }) => {
  return (
    <>
      <Counter index={i + 1}></Counter>
      <Heading index={i} title_text={item[1]}></Heading>
      <ProgressBar time_to_guess={time_to_guess}></ProgressBar>
      <DisplayImg img_index={i} time_to_guess={time_to_guess}></DisplayImg>
      <Alternatives index={i} alternatives={item.slice(2, 5)} keys={item.slice(5, 8)} time_to_guess={time_to_guess}></Alternatives>
    </>
  );
};