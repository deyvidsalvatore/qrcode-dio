import prompt from 'prompt';
import promptSchemaMain from './prompts-schema/prompt-schema-main.js';

async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if (err) console.log(err);
    });

    prompt.start();
}

main();