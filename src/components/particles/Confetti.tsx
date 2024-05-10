import type { Container, ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";

export function ParticlesContainer() {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			//await loadAll(engine);
			await loadFull(engine);
			//await loadBasic(engine);
		}).then(() => {
			setTimeout(() => {
				setInit(false);
			}, 5000);
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				size: "100% 100%",
				repeat: "no-repeat",
			},
			fullScreen: {
				enable: true,
				zIndex: -1,
			},
			particles: {
				color: {
					value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"],
					animation: {
						enable: true,
						speed: 30,
					},
				},
				move: {
					direction: "bottom",
					enable: true,
					outModes: {
						default: "out",
					},
					size: true,
					speed: {
						min: 1,
						max: 3,
					},
				},
				number: {
					value: 700,
					density: {
						enable: true,
					},
				},
				opacity: {
					value: 1,
				},
				rotate: {
					value: {
						min: 0,
						max: 360,
					},
					direction: "random",
					move: true,
					animation: {
						enable: true,
						speed: 60,
					},
				},
				tilt: {
					direction: "random",
					enable: true,
					move: true,
					value: {
						min: 0,
						max: 360,
					},
					animation: {
						enable: true,
						speed: 60,
					},
				},
				shape: {
					type: ["circle", "square", "polygon"],
					options: {
						polygon: [
							{
								sides: 5,
							},
							{
								sides: 6,
							},
						],
					},
				},
				size: {
					value: {
						min: 3,
						max: 5,
					},
				},
				roll: {
					darken: {
						enable: true,
						value: 30,
					},
					enlighten: {
						enable: true,
						value: 30,
					},
					enable: true,
					speed: {
						min: 15,
						max: 25,
					},
				},
				wobble: {
					distance: 30,
					enable: true,
					move: true,
					speed: {
						min: -15,
						max: 15,
					},
				},
			},
		}),
		[],
	);

	if (init) {
		return (
			<Particles
				id="tsparticles"
				particlesLoaded={particlesLoaded}
				options={options}
				className={`
          absolute z-50
        `}
			/>
		);
	}

	return <></>;
}
