export * from './enums/@';
import * as Sync from './interfaces.sync/@';
import * as Async from './interfaces/@';

export { Sync, Async };

declare const cadesplugin: Sync.IWebClassFactory | Async.IWebClassFactory;
