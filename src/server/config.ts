/**
 * Global storage server configuration.
 */
import { Express } from 'express';
import { removeUndefined } from '../utils/object';

export type GlobalStorageServerConfig = {
  port?: number;
  basePath?: string;
};

const defaults: Pick<Required<GlobalStorageServerConfig>, 'basePath'> = {
  basePath: '.global-storage',
};

type GlobalStorageServerConfigResolved = ReturnType<typeof buildResolvedConfig>;

export function setConfig(app: Express, providedConfig: GlobalStorageServerConfig) {
  app.locals.config = buildResolvedConfig(providedConfig);
}

export function getConfig(app: Express) {
  return app.locals.config as GlobalStorageServerConfigResolved;
}

function buildResolvedConfig(providedConfig: GlobalStorageServerConfig) {
  return Object.assign({}, defaults, removeUndefined(providedConfig));
}
