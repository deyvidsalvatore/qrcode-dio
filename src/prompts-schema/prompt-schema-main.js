import chalk from 'chalk';

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.yellow.bold(
            "Choose your tool (1 - QRCODE, 2 - PASSWORD)"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Choose between 1 and 2'),
        required: true,
    }
];

export default promptSchemaMain;