import React, { useMemo } from 'react';
import { AbsoluteFill } from 'remotion';
import type {
	TransitionPresentation,
	TransitionPresentationComponentProps,
} from "@remotion/transitions";

export type SlideDirection =
	| 'from-left'
	| 'from-top'
	| 'from-right'
	| 'from-bottom';

export type SlideProps = {
	exitStyle?: React.CSSProperties;
	enterStyle?: React.CSSProperties;
};

const epsilon = 0.01;

const SlidePresentation: React.FC<
	TransitionPresentationComponentProps<SlideProps>
> = ({
	children,
	presentationProgress,
	presentationDirection,
	passedProps: { enterStyle, exitStyle },
}) => {
		const directionStyle = useMemo((): React.CSSProperties => {
			// Overlay the two slides barely to avoid a white line between them
			// Remove the correction once the presentation progress is 1
			const presentationProgressWithEpsilonCorrection =
				presentationProgress === 1
					? presentationProgress * 100
					: presentationProgress * 100 - epsilon;
			if (presentationDirection === 'exiting') {
				return {
					transform: `translateX(${presentationProgressWithEpsilonCorrection}%)`,
				};
			}

			return {
				transform: `translateX(${-100 + presentationProgress * 100}%)`,
			};
		}, [presentationDirection, presentationProgress]);

		const style: React.CSSProperties = useMemo(() => {
			return {
				width: '100%',
				height: '100%',
				justifyContent: 'center',
				alignItems: 'center',
				...directionStyle,
				...(presentationDirection === 'entering' ? enterStyle : exitStyle),
			};
		}, [directionStyle, enterStyle, exitStyle, presentationDirection]);

		return <AbsoluteFill style={style}>{children}</AbsoluteFill>;
	};

export const slidePres = (
	props?: SlideProps,
): TransitionPresentation<SlideProps> => {
	return {
		component: SlidePresentation,
		props: props ?? {},
	};
};