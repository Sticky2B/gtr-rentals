"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = ({ env }) => ({
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
exports.default = config;
