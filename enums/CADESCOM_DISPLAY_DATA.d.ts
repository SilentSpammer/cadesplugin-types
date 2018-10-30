/**
 * Способ передачи данных для отображения на специализированных устройствах
 *
 * [CPDN: CADESCOM_DISPLAY_DATA](http://cpdn.cryptopro.ru/default.asp?url=content/cades/namespace_c_ad_e_s_c_o_m_fbf9d2a072537f4a1d7e5ee8055f910a_1fbf9d2a072537f4a1d7e5ee8055f910a.html)
 */
export const enum CADESCOM_DISPLAY_DATA {
    /** Отображаемые данные лежат в подписанном атрибуте сообщения */
    CADESCOM_DISPLAY_DATA_NONE = 0x00,

    /** Отображаемые данные лежат в теле сообщения */
    CADESCOM_DISPLAY_DATA_CONTENT = 0x01,

    /** Данные не будут пересылаться в устройство */
    CADESCOM_DISPLAY_DATA_ATTRIBUTE = 0x02,
}
