import { Background } from "./backgrounds/Background";
import { Intro } from "./Intro"
import { slidePres } from "./transitions/SlidePres";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { BetweenTransition } from "./transitions/BetweenTransition"
import { AboutIntro } from './AboutIntro'
import { Outro } from './Outro'
import { WouldMusic } from './would_you_rather/WouldMusic'
import { GuessEmoji } from './guess_emoji/GuessEmoji'
import { GuessEmojiImage } from './guess_emoji/GuessEmojiImage'
import { WouldRather } from "./would_you_rather/WouldRather";
import { Trivia } from "./trivia/Trivia";
import { ConicalBackground } from "./backgrounds/ConicalBackground";
import { CoolBackground } from "./backgrounds/CoolBackground";
import { OddEmoji } from './odd_one_out/OddEmoji'
import { PlayAudioNewScene } from './PlayAudioNewScene'
import { PlayAudioEndScene } from './PlayAudioEndScene'


// import {AudioComponent} from "./AudioComponent"
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

export type GeneralCompositionProps = {
	video_data: Array<Array<string>>;
	title_text: string;
	time_to_guess: GLfloat;
	show_answer_time: GLfloat
	transition_length: GLfloat;
	intro_duration: GLfloat;
	intro_about_duration: GLint;
	number_of_questions: GLint;
	intro_about_text: string;
	intro_about_emojis: string;
	outro_duration: GLint;
	seed_str: string;
	play_audio_new_scene: boolean;
	play_audio_end_scene: boolean;
	play_intro: boolean;
	play_about_intro: boolean;
	play_outro: boolean;
	watermark_name: string;
	use_watermark: boolean;
	logo_path: string;
	intro_text: string;
}

const components_map = {
	"would_music": WouldMusic,
	"would_rather": WouldRather,
	"guess_emoji": GuessEmoji,
	"guess_emoji_img": GuessEmojiImage,
	"trivia": Trivia,
	"odd_emoji": OddEmoji,
}
const background_list = [ConicalBackground, CoolBackground, Background]

export const GeneralComposition: React.FC<GeneralCompositionProps> = ({
	video_data, title_text, time_to_guess,
	show_answer_time, transition_length, intro_duration,
	number_of_questions, intro_about_emojis, intro_about_text,
	intro_about_duration, outro_duration, seed_str,
	play_audio_new_scene, play_audio_end_scene, play_intro,
	play_about_intro, play_outro, watermark_name,
	use_watermark, logo_path, intro_text
}) => {
	var seed = cyrb128(seed_str);
	var rand = sfc32(seed[0], seed[1], seed[2], seed[3]);
	return (
		<>
			<TransitionSeries>
				{play_intro &&
					<TransitionSeries.Sequence durationInFrames={intro_duration}>
						<Intro logo_path={logo_path} intro_text={intro_text}></Intro>
					</TransitionSeries.Sequence>
				}
				{play_intro &&
					<TransitionSeries.Transition
						presentation={slidePres()}
						timing={springTiming({
							config: {
								damping: 200,
								mass: 1,
								stiffness: 100,
							},
							durationInFrames: transition_length,
							durationRestThreshold: 0.001
						})}
					/>
				}
				{play_intro &&
					<TransitionSeries.Sequence durationInFrames={transition_length * 2 + 5}>
						<BetweenTransition logo_path={logo_path}></BetweenTransition>
					</TransitionSeries.Sequence>
				}
				{play_intro &&
					<TransitionSeries.Transition
						presentation={slidePres({ exitStyle: { zIndex: "5" } })}
						timing={springTiming({
							config: {
								damping: 200,
								mass: 1,
								stiffness: 100,
							},
							durationInFrames: transition_length,
							durationRestThreshold: 0.001
						})}
					/>
				}
				{play_about_intro &&
					<TransitionSeries.Sequence durationInFrames={intro_about_duration}>
						<Background use_watermark={use_watermark} watermark_name={watermark_name} color_num={1}></Background>
						<AboutIntro intro_about_text={intro_about_text} number_of_questions={number_of_questions} intro_about_emojis={intro_about_emojis}></AboutIntro>
					</TransitionSeries.Sequence>
				}
				{play_about_intro &&
					<TransitionSeries.Transition
						presentation={slidePres()}
						timing={springTiming({
							config: {
								damping: 200,
								mass: 1,
								stiffness: 100,
							},
							durationInFrames: transition_length,
							durationRestThreshold: 0.001
						})}
					/>
				}
				{play_about_intro &&
					<TransitionSeries.Sequence durationInFrames={transition_length * 2 + 5}>
						<BetweenTransition logo_path={logo_path}></BetweenTransition>
					</TransitionSeries.Sequence>
				}
				{play_about_intro &&
					<TransitionSeries.Transition
						presentation={slidePres({ exitStyle: { zIndex: "5" } })}
						timing={springTiming({
							config: {
								damping: 200,
								mass: 1,
								stiffness: 100,
							},
							durationInFrames: transition_length,
							durationRestThreshold: 0.001
						})}
					/>
				}

				{video_data.map((item, i) => {
					let Back = background_list[Math.floor(rand() * background_list.length)]
					let num = Math.floor(rand() * 7)
					let item_string = String(item[0])
					let Comp = components_map[item_string as keyof typeof components_map]
					return (
						<>
							<TransitionSeries.Sequence key={"a" + String(i)} durationInFrames={time_to_guess + show_answer_time}>
								<Back use_watermark={use_watermark} color_num={num} watermark_name={watermark_name}></Back>
								{play_audio_new_scene &&
									<PlayAudioNewScene tp={item_string} rn={rand()}></PlayAudioNewScene>
								}
								<Comp i={i} item={item} title_text={title_text} time_to_guess={time_to_guess}  ></Comp>
								{play_audio_end_scene &&
									<PlayAudioEndScene tp={item_string} rn={rand()} index={i} time_to_guess={time_to_guess} ></PlayAudioEndScene>
								}
							</TransitionSeries.Sequence>

							<TransitionSeries.Transition key={"b" + String(i)}
								presentation={slidePres()}
								timing={springTiming({
									config: {
										damping: 200,
										mass: 1,
										stiffness: 100,
									},
									durationInFrames: transition_length,
									durationRestThreshold: 0.001
								})}
							/>

							<TransitionSeries.Sequence key={"c" + String(i)} durationInFrames={transition_length * 2 + 5}>
								<BetweenTransition logo_path={logo_path}></BetweenTransition>
							</TransitionSeries.Sequence>

							<TransitionSeries.Transition key={"d" + String(i)}
								presentation={slidePres({ exitStyle: { zIndex: "5" } })}
								timing={springTiming({
									config: {
										damping: 200,
										mass: 1,
										stiffness: 100,
									},
									durationInFrames: transition_length,
									durationRestThreshold: 0.001
								})}
							/>
						</>
					)
				})}
				{play_outro &&
					<TransitionSeries.Sequence durationInFrames={outro_duration}>
						<Outro></Outro>
					</TransitionSeries.Sequence>
				}
			</TransitionSeries>
		</>
	)
};