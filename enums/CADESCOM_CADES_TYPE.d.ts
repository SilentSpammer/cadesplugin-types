/**
 * Тип усовершенствованной подписи
 *
 * [CPDN: CADESCOM_CADES_TYPE](http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_fe49883d8ff77f7edbeeaf0be3d44c0b_1fe49883d8ff77f7edbeeaf0be3d44c0b.html)
 */
export const enum CADESCOM_CADES_TYPE {
    /** Тип подписи CAdES BES */
    CADESCOM_CADES_DEFAULT = 0,

    /** Тип подписи CAdES BES */
    CADESCOM_CADES_BES = 0x01,

    /** Тип подписи CAdES T */
    CADESCOM_CADES_T = 0x05,

    /** Тип подписи CAdES-X Long Type 1 */
    CADESCOM_CADES_X_LONG_TYPE_1 = 0x5d,
}
