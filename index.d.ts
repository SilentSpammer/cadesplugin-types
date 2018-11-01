import * as Sync from './interfaces.sync/@';
import * as Async from './interfaces.async/@';
import * as Variant from './interfaces.variant/@';

export * from './enums/@';
export * from './interfaces.variant/@';
export { Sync, Async };

export declare const cadesplugin: Variant.IWebClassFactory;
export declare const asyncMode: boolean;
export declare function isSync<S, A = any>(obj: S | A): obj is S;
export declare function isAsync<A, S = any>(obj: S | A): obj is A;
