import type {Core} from '@strapi/strapi';

const config = ({env}: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('dedr1lu8z'),
                api_key: env('623325112688179'),
                api_secret: env('qrTl-RTkxTOBeeKiKKeZyOjOoGc'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
});

export default config;
