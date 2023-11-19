/** @format */

import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-5 gap-2">
			<h1 className="text-6xl font-bold">Example repo with Sharp and Canvas</h1>

			<p>
				When using Sharp and Canvas in the same project, either one of them works, but not both at the same
				time.
			</p>

			<p>
				Under this text, 2 images will be loaded via API routes. The first one is loaded via Sharp, the second
				one via Canvas.
				<br />
				Check the console to see the error.
			</p>

			<div className="flex flex-row items-center justify-between gap-5">
				<img src="/api/sharp" alt="Sharp" className="w-1/2 border border-white bg-slate-800" />

				<img src="/api/canvas" alt="Canvas" className="w-1/2 border border-white bg-slate-800" />
			</div>
		</main>
	);
}
