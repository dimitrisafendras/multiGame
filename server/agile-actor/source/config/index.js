import fs from 'fs';
import config from './config';

const configFile = process.env.AGILE_ACTOR_CONFIG_FILE;
let configObject = {};

if (configFile) {
  try {
    const configData = fs.readFileSync(configFile, 'utf8');
    configObject = JSON.parse(configData || '{}');
  } catch (err) {
    console.warn(`--> Config File : ${configFile} NOT FOUNT continue with default confing`);
  }
}

export default config(configObject);
