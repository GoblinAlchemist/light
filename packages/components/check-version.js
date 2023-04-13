import pkgVersions from 'pkg-versions';
import { version } from './package.json';

(async function () {
  const versions = await pkgVersions('@goblinalchemist/components');
  if (versions.has(version)) {
    throw 'Version already published!';
  }
})();
