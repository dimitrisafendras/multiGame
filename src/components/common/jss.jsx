import { create } from 'jss';
import reactJss from 'react-jss';
import vendorPrefixer from 'jss-vendor-prefixer';
import camelCase from 'jss-camel-case';
import nested from 'jss-nested';

// import jssIsolate from 'jss-isolate'

const jss = create();

jss.use(vendorPrefixer());

// jss.use(jssIsolate())
jss.use(camelCase());
jss.use(nested());

const useSheet = reactJss(jss);

export { jss, useSheet };
