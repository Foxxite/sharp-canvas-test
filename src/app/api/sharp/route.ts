/**
 *   This file is to simulate the upload of
 *   an image by the user.
 *
 *   For this simulation, the image is read
 *   from the file system and send back to
 *   the requester after is has been optimized
 * 	 with sharp.
 *
 * @format
 */

import sharp from "sharp";
import fs from "fs-extra";

export async function GET() {
	// Normally this would be a POST request
	// with the image in the body of the request

	const image = await fs.readFile("public/large-user-image.png");

	const optimizedImage = await sharp(image).resize(960).webp({ quality: 80 }).toBuffer();

	// Normally this would return some metadata
	// about the image.
	// For this simulation, we return the image
	return new Response(optimizedImage, {
		headers: {
			"Content-Type": "image/webp",
		},
	});
}
