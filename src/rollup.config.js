//Import the modules needed for our configuration
import globby from 'globby';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import path from 'path';

export default {

    input: globby.sync([ 'Shared/**/*.js', 'Pages/**/*.js' ]),
    output: {

        //The root folder for all bundled .js files
        dir: './wwwroot/js/',

        // bundle the files as ES modules
        format: 'es',

        entryFileNames: ( { facadeModuleId } ) => {
            
            let root = path.resolve('.');
            let filePath = path.parse(facadeModuleId.substr( -(facadeModuleId.length - root.length)+1));
            
            return `${filePath.dir}/[name].js`; 
        }
    },
    plugins: [
        nodeResolve(),
        commonjs({
            include: "node_modules/**"
        }),
        babel({ 
            babelHelpers: 'bundled',
        }),
    ]
};
