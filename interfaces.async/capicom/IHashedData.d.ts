import { CAPICOM_HASH_ALGORITHM } from '../../enums/@';

/**
 * The HashedData object provides functionality for hashing a string
 *
 * [MS Docs: HashedData](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/hasheddata)
 */
export interface IHashedData {
    readonly Algorithm: Promise<CAPICOM_HASH_ALGORITHM>;
    propset_Algorithm(value: CAPICOM_HASH_ALGORITHM): Promise<void>;
    readonly Value: Promise<string>;

    Hash(newVal: string): Promise<void>;
}
