import { readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const cssDirectory = join(process.cwd(), "out", "_next", "static", "chunks");
const files = (await readdir(cssDirectory)).filter((file) => file.endsWith(".css"));

await Promise.all(
  files.map(async (file) => {
    const path = join(cssDirectory, file);
    const css = await readFile(path, "utf8");
    await writeFile(path, css.replaceAll("url(/fonts/", "url(../../../fonts/"));
  }),
);
