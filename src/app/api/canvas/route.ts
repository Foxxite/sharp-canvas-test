/**
 *   This file generates a canvas image
 *   with the current date and time.
 *
 * @format
 */

import { createCanvas } from "canvas";

export async function GET() {
	const canvas = createCanvas(960, 540);
	const ctx = canvas.getContext("2d");

	const dateStr = new Date().toISOString();

	ctx.fillStyle = "#000";
	ctx.fillRect(0, 0, 960, 540);

	ctx.fillStyle = "#fff";
	ctx.font = "48px sans-serif";
	ctx.fillText(dateStr, 10, 50);

	const image = canvas.toBuffer("image/png");

	return new Response(image, {
		headers: {
			"Content-Type": "image/png",
		},
	});
}
