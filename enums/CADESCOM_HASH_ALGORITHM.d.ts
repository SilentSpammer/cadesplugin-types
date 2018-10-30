/**
 * Алгоритмы хэширования
 *
 * [CPDN: CADESCOM_HASH_ALGORITHM](http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_c64bb9facc59333fe4815d569f2ca026_1c64bb9facc59333fe4815d569f2ca026.html)
 */
export const enum CADESCOM_HASH_ALGORITHM {
    /** Алгоритм SHA1 */
    CADESCOM_HASH_ALGORITHM_SHA1 = 0,

    /** Алгоритм MD2 */
    CADESCOM_HASH_ALGORITHM_MD2 = 1,

    /** Алгоритм MD4 */
    CADESCOM_HASH_ALGORITHM_MD4 = 2,

    /** Алгоритм MD5 */
    CADESCOM_HASH_ALGORITHM_MD5 = 3,

    /** Алгоритм SHA1 с длиной ключа 256 бит */
    CADESCOM_HASH_ALGORITHM_SHA_256 = 4,

    /** Алгоритм SHA1 с длиной ключа 384 бита */
    CADESCOM_HASH_ALGORITHM_SHA_384 = 5,

    /** Алгоритм SHA1 с длиной ключа 512 бит */
    CADESCOM_HASH_ALGORITHM_SHA_512 = 6,

    /** Алгоритм ГОСТ Р 34.11-94 */
    CADESCOM_HASH_ALGORITHM_CP_GOST_3411 = 100,

    /** Алгоритм ГОСТ Р 34.10-2012 */
    CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_256 = 101,

    /** Алгоритм ГОСТ Р 34.10-2012 */
    CADESCOM_HASH_ALGORITHM_CP_GOST_3411_2012_512 = 102,
}
