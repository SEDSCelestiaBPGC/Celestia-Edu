import fs from "fs";
const meta_file = './src/lib/data/meta.json';

const { current: buildNumber, version: web_ver } = JSON.parse( fs.readFileSync( meta_file, 'utf-8' ) ).build;
const { owner, author, version } = JSON.parse( fs.readFileSync( './package.json', 'utf8' ) );
const buildTime = Date.now();

const metadata = {
    name: 'SEDSCelestia Edu',
    author,
    owner,
    build: {
        current: web_ver === version ? buildNumber + 1 : 0,
        previous: buildNumber,
        version,
    },
    time: buildTime
};

fs.writeFileSync( meta_file, JSON.stringify( metadata ) );