/**
 * The CAPICOM_HASH_ALGORITHM enumeration defines a hash algorithm
 *
 * [MS Docs: CAPICOM_HASH_ALGORITHM](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/capicom-hash-algorithm)
 */
export const enum CAPICOM_HASH_ALGORITHM {
    /** SHA1 hashing algorithm */
    CADESCOM_HASH_ALGORITHM_SHA1 = 0,

    /** MD2 hashing algorithm */
    CADESCOM_HASH_ALGORITHM_MD2 = 1,

    /** MD4 hashing algorithm */
    CADESCOM_HASH_ALGORITHM_MD4 = 2,

    /** MD5 hashing algorithm */
    CADESCOM_HASH_ALGORITHM_MD5 = 3,

    /** SHA-256 hash algorithm */
    CADESCOM_HASH_ALGORITHM_SHA_256 = 4,

    /** SHA-384 hash algorithm */
    CADESCOM_HASH_ALGORITHM_SHA_384 = 5,

    /** SHA-512 hash algorithm */
    CADESCOM_HASH_ALGORITHM_SHA_512 = 6,
}
