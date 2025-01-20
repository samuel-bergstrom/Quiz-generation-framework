import { CalculateMetadataFunction, Composition} from 'remotion';
import { continueRender, delayRender, staticFile } from "remotion";
import { GeneralComposition, GeneralCompositionProps } from './GeneralComposition';

const calculateMetadata: CalculateMetadataFunction<GeneralCompositionProps> = async ({
	props,
	defaultProps,
	abortSignal,

}) => {
	const delay = delayRender();

	let data : string[][] = [];
	try {
		const response = await fetch(staticFile('video_data.txt'), { signal: abortSignal });
		const text = await response.text();
		// console.log(text)
		data = text.split('\n').map((line) => line.split('|').map((col) => col.trim()));
	} catch (error) {
		console.error('Failed to load video data:', error);
	} finally {
		continueRender(delay);
	}
	return {
		// Change the metadata
		// or transform some props
		props: {
			...props,
			video_data: data,
			number_of_questions: data.length,
		},
		durationInFrames:
			(props.time_to_guess + props.show_answer_time + 5) * data.length
			+ (props.play_intro ? props.intro_duration : 0)
			+ (props.play_about_intro ? props.intro_about_duration : 0)
			+ (props.play_outro ? props.outro_duration : 0)
	};
};
export const RemotionRoot: React.FC = () => {

	const waitForFont = delayRender();
	const font = new FontFace(
		`lucky`,
		`url('${staticFile("/fonts/LuckiestGuy.ttf")}') format('truetype')`
	);

	font
		.load()
		.then(() => {
			document.fonts.add(font);
			continueRender(waitForFont);
		}).catch((err) => console.log("Error loading font", err));
	const waitForFont2 = delayRender();
	const font2 = new FontFace(
		`noto`,
		`url('${staticFile("/fonts/NotoColorEmoji.ttf")}') format('truetype')`
	);

	font2
		.load()
		.then(() => {
			document.fonts.add(font2);
			continueRender(waitForFont2);
		}).catch((err) => console.log("Error loading font", err));
	const waitForFont3 = delayRender();
	const font3 = new FontFace(
		`alte`,
		`url('${staticFile("/fonts/AlteHaasGroteskBold.ttf")}') format('truetype')`
	);

	font3
		.load()
		.then(() => {
			document.fonts.add(font3);
			continueRender(waitForFont3);
		}).catch((err) => console.log("Error loading font", err));
	const waitForFont4 = delayRender();
	const font4 = new FontFace(
		`alerion`,
		`url('${staticFile("/fonts/aileronbold.otf")}') format('opentype')`
	);

	font4
		.load()
		.then(() => {
			document.fonts.add(font4);
			continueRender(waitForFont4);
		}).catch((err) => console.log("Error loading font", err));

	return (
		<>
			<Composition
				id="GeneralComp"
				component={GeneralComposition}
				durationInFrames={1200}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{

					//Should edit
					intro_about_text: "Guess the ___ by Emojis",
					title_text: "Guess the ___",
					intro_about_emojis: "🎥👑🦁", //preferably 3 can be empty
					seed_str: "1337", //used for deterministic random number generator
					intro_text: "INTRO TEXT",

					//Optional edit
					logo_path: '/images/logo.png',
					play_intro: true,
					play_about_intro: true,
					play_outro: true,
					play_audio_new_scene: true, //Play voiceline on new scene
					play_audio_end_scene: true, //Play voiceline after answer reveal
					use_watermark: false,
					watermark_name: "WATERMARK NAME",
					intro_duration: 140,
					time_to_guess: 280,
					show_answer_time: 160,
					intro_about_duration: 400,
					outro_duration: 300,
					transition_length: 25,

					//Initialization 
					video_data: [["", ""]],
					number_of_questions: 1
				}}
				calculateMetadata={calculateMetadata}
			/>
		</>
	);
};
