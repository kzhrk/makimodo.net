import { readFileSync, readdirSync } from "node:fs";
import parseMD from "parse-md";

export default defineEventHandler(async () => {
	const pages = Array(readdirSync("./episodes").length)
		.fill(0)
		.map((_, i) => i + 1)
		.reverse();
	return pages.map((p) => {
		const path = `./episodes/${p}.md`;
		const file = readFileSync(path);
		const { metadata } = parseMD(file.toString()) as { metadata: Metadata };
		return {
			...metadata,
			episodeNumber: p,
		};
	});
});
