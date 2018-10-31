import * as Sync from './interfaces.sync/@';
import * as Async from './interfaces.async/@';
import * as Variant from './interfaces.variant/@';

export * from './enums/@';
export * from './interfaces.variant/@';
export { Sync, Async };

export declare const cadesplugin: Variant.IWebClassFactory;
export declare const asyncMode: boolean;
export * from './guard-sync';
export * from './guard-async';
