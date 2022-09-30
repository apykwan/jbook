import esbuild from 'esbuild-wasm';

import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

let initialized: boolean = false;

interface bundle {
    code: string;
    err: string;
};

const bundler = async (rawCode: string): Promise<bundle> => {
    if (!initialized) {
        await esbuild.initialize({
            worker: true,
            wasmURL: 'https://unpkg.com/esbuild-wasm@0.14.53/esbuild.wasm'
        });
        initialized = true;
    }

    try {
        const result = await esbuild.build({
            entryPoints: ['index.js'],
            bundle: true,
            write: false,
            plugins: [unpkgPathPlugin(), fetchPlugin(rawCode)],
            define: {
                'process.env.NODE_ENV': '"production"',
                global: 'window'
            },
            jsxFactory: '_React.createElement',
            jsxFragment: '_React.Fragment'
        });

        return {
            code: result.outputFiles[0].text,
            err: ''
        }
    } catch (err: any) {
        return {
            code: '',
            err: err.message
        };
    }
};

export default bundler;