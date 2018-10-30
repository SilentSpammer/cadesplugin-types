/**
 * Тип подписи XML-документа
 *
 * [CPDN: CADESCOM_XML_SIGNATURE_TYPE](http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_bc786984157586e73c5fca967d9da4ef_1bc786984157586e73c5fca967d9da4ef.html)
 */
export const enum CADESCOM_XML_SIGNATURE_TYPE {
    /** Вложенная подпись */
    CADESCOM_XML_SIGNATURE_TYPE_ENVELOPED = 0,

    /** Оборачивающая подпись */
    CADESCOM_XML_SIGNATURE_TYPE_ENVELOPING = 1,

    /** Подпись по шаблону */
    CADESCOM_XML_SIGNATURE_TYPE_TEMPLATE = 2,
}
