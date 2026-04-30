import type {Core} from '@strapi/strapi';

const config = ({env}: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1338),
    app: {
        keys: env.array('APP_KEYS'),
    },
    transfer: {
        remote: {
            enabled: env.bool('STRAPI_TRANSFER_REMOTE_ENABLED', true),
        },
    },
    webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
});

export default config;
