/**
 * Описывает результат проверки электронной подписи
 *
 * [CPDN: ISignatureStatus](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_signature_status.html)
 */
export interface ISignatureStatus {
    /** Возвращает результат проверки подписи */
    readonly IsValid: Promise<boolean>;
}
