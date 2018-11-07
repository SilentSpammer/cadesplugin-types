import { CAPICOM_HASH_ALGORITHM } from '../../enums/@';

/**
 * The HashedData object provides functionality for hashing a string
 *
 * [MS Docs: HashedData](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/hasheddata)
 */
export interface IHashedData {
    Algorithm: CAPICOM_HASH_ALGORITHM;
    readonly Value: string;

    Hash(newVal: string): void;
}
