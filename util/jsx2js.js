import glob from 'glob';
import mv from 'mv';

glob(`**/*.jsx`, (err, matches) => {
  if (err) {
    throw err;
  }

  matches.forEach((source) => {
    if (!source.includes('node_modules/')) {
      const dest = source.replace(/\.jsx$/, '.js');
      const clobber = false;
      console.log(`---> JSX to JS: ${source} -> ${dest}`);

      mv(source, dest, { clobber }, (err) => console.error(
        `---> JSX to JS: ${source} -> ${dest}`,
        err // If 'dest' exists, an error is returned with err.code === 'EEXIST'
      ));
    }
  });
});
