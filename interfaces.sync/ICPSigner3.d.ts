import { ICPSigner2 } from './ICPSigner2';

/**
 * Расширяет интерфейс ICPSigner2
 *
 * [CPDN: ICPSigner3](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signer3.html)
 */
export interface ICPSigner3 extends ICPSigner2 {
    /** Время подписи из штампа времени на значение подписи */
    readonly SignatureTimeStampTime: string;

    /** Время подписи из атрибута signingTime */
    readonly SigningTime: string;
}
