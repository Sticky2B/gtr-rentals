"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const config = ({ env }) => {
    const client = env('DATABASE_CLIENT', 'postgres');
    const connections = {
        postgres: {
            connection: {
                connectionString: env('DATABASE_URL'), // Best for Neon + Railway
                host: env('DATABASE_HOST'),
                port: env.int('DATABASE_PORT', 5432),
                database: env('DATABASE_NAME'),
                user: env('DATABASE_USERNAME'),
                password: env('DATABASE_PASSWORD'),
                ssl: env.bool('DATABASE_SSL', false) && {
                    rejectUnauthorized: false,
                },
            },
            pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
        },
        sqlite: {
            connection: {
                filename: path_1.default.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
            },
            useNullAsDefault: true,
        },
    };
    return {
        connection: {
            client,
            ...connections[client],
            acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
        },
    };
};
exports.default = config;
