/**
 * Способ кодирования данных для подписи
 *
 * [CPDN: CADESCOM_CONTENT_ENCODING_TYPE](http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_138b6c63b9d33e9a70c23e98b6161d3a_1138b6c63b9d33e9a70c23e98b6161d3a.html)
 */
export const enum CADESCOM_CONTENT_ENCODING_TYPE {
    /** Кодировка UTF-8 или UNICODE */
    CADESCOM_STRING_TO_UCS2LE = 0,

    /** Кодировка BASE64 */
    CADESCOM_BASE64_TO_BINARY = 1,
}
