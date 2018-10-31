export * from './enums/@';
import * as Sync from './interfaces.sync/@';
import * as Async from './interfaces/@';

export { Sync, Async };

declare const cadesplugin: Sync.IWebClassFactory | Async.IWebClassFactory;
const _cadesplugin = cadesplugin;
export { _cadesplugin as cadesplugin };

export const isAsync = cadesplugin && !!(cadesplugin as any).CreateObjectAsync;

export function guardAsync(
    cadesplugin: Sync.IWebClassFactory | Async.IWebClassFactory
): cadesplugin is Async.IWebClassFactory {
    return isAsync;
}

export function guardSync(
    cadesplugin: Sync.IWebClassFactory | Async.IWebClassFactory
): cadesplugin is Sync.IWebClassFactory {
    return !isAsync;
}
