export * from './enums/@';
import * as Sync from './interfaces.sync/@';
import * as Async from './interfaces.async/@';
export * from './interfaces.variant/@';

export { Sync, Async };

export declare const cadesplugin: Sync.IWebClassFactory | Async.IWebClassFactory;

export declare const asyncMode: boolean;

export declare function isAsync(
    cadesplugin: Sync.IWebClassFactory | Async.IWebClassFactory
): cadesplugin is Async.IWebClassFactory;

export declare function isSync(
    cadesplugin: Sync.IWebClassFactory | Async.IWebClassFactory
): cadesplugin is Sync.IWebClassFactory;
