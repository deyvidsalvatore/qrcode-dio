import chalk from 'chalk';

const promptSchemaQRCode = [
    {
        name: 'link',
        description: chalk.yellow('Provide the link to generate QR Code'),
    },
    {
        name: 'type',
        description: chalk.yellow(
            'Choose the type of QR code generated (1- NORMAL or 2- TERMINAL)'
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic('Escolha apenas entre 1 e 2'),
        required: true,
    },
];

export default promptSchemaQRCode;
