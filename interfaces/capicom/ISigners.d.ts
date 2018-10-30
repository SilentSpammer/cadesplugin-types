import { ISigner } from './ISigner';

/**
 *
 *
 * [MS Docs: Signers](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/signers)
 */
export interface ISigners {
    Item(Index: number): Promise<ISigner>;

    readonly Count: Promise<number>;
}
