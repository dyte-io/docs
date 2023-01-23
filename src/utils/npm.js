
const versions = {};

export default async function latestNPMVersion({ pkg = 'ui-kit' }) {
  if(versions[pkg] !== undefined) return versions[pkg];

  const versionResp = await fetch(`https://registry.npmjs.com/@dytesdk/${pkg}`);
  const versionJson = await versionResp.json();
  const version = versionJson['dist-tags']['latest'];
  versions[pkg] = version;
  return version;
}
