import glob from 'glob';
import mv from 'mv';

glob(`${__dirname}/**/*.jsx`, (err, matches) => {
  if (err) {
    throw err;
  }

  matches.forEach((source) => {
    const dest = source.replace(/\.jsx$/, '.js');
    mv(source, dest, {clobber: false}, (err) => {
      // If 'dest' exists, an error is returned with err.code === 'EEXIST'.
      console.error(`---> JSX to JS: ${source} -> ${dest}`, err);
    });
  });
});
