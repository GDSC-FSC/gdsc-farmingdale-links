import { encode } from "blurhash";

const loadImage = async (src: string): Promise<HTMLImageElement> =>
	new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve(img);
		img.onerror = (...args) => reject(args);
		img.src = src;
	});

const getImageData = (image: HTMLImageElement): ImageData => {
	const canvas = document.createElement("canvas");
	canvas.width = image.width;
	canvas.height = image.height;
	const context = canvas.getContext("2d");
	context!.drawImage(image, 0, 0);
	return context!.getImageData(0, 0, image.width, image.height);
};

export const encodeImage = async (url: string) => {
	const image: HTMLImageElement = await loadImage(url);
	const imageData: ImageData = getImageData(image);
	return encode(imageData.data, imageData.width, imageData.height, 4, 4);
};
