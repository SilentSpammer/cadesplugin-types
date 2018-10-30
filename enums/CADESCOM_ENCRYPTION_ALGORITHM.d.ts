/**
 * Алгоритмы шифрования
 *
 * [CPDN: CADESCOM_ENCRYPTION_ALGORITHM](http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_9c67e4b4865197c4a6cc10c8a3cae68e_19c67e4b4865197c4a6cc10c8a3cae68e.html)
 */
export const enum CADESCOM_ENCRYPTION_ALGORITHM {
    /** Алгоритм RSA RC2 */
    CADESCOM_ENCRYPTION_ALGORITHM_RC2 = 0,

    /** Алгоритм RSA RC4 */
    CADESCOM_ENCRYPTION_ALGORITHM_RC4 = 1,

    /** Алгоритм DES */
    CADESCOM_ENCRYPTION_ALGORITHM_DES = 2,

    /** Алгоритм 3DES */
    CADESCOM_ENCRYPTION_ALGORITHM_3DES = 3,

    /** Алгоритм AES */
    CADESCOM_ENCRYPTION_ALGORITHM_AES = 4,

    /** Алгоритм ГОСТ 28147-89 */
    CADESCOM_ENCRYPTION_ALGORITHM_GOST_28147_89 = 25,
}
