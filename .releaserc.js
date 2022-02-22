const mainConfig = {
    branches: ['main'],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        [
            '@semantic-release/npm',
            {
                npmPublish: false,
                tarballDir: 'dist'
            }
        ],
        [
            '@semantic-release/git',
            {
                assets: [
                    'package.json',
                    'package-lock.json',
                    'CHANGELOG.md'
                ],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}\n\n\nskip-checks: true'
            }
        ],
        [
            '@semantic-release/github',
            {
                assets: 'dist/*.tgz'
            }
        ]
    ],
    repositoryUrl: 'https://github.com/dyte-in/docs'
};

module.exports = mainConfig;
