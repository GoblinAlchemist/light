import pkgVersions from "pkg-versions";
import fs from 'fs';

const {version} = JSON.parse(fs.readFileSync('package.json', 'utf8'));

(async function () {
  const versions = await pkgVersions("@goblinalchemist/utils");
  if (versions.has(version)) {
    throw "Version already published!";
  }
})();
