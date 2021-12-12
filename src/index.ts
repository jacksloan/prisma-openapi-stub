import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper';
import * as fs from 'fs';
import * as path from 'path';

generatorHandler({
    onManifest: () => ({
        defaultOutput: './@generated',
        prettyName: 'prisma-openapi-stub',
    }),
    async onGenerate(options: GeneratorOptions) {
        console.info('Config = ', options.generator.config);
        const output = options.generator.output?.value;
        await fs.promises.mkdir(output, { recursive: true });
        await fs.promises.writeFile(
            path.resolve(output, 'test.json'),
            `
{
    "hello": "world"
}
        `
        );
    },
});
