import { ICPSigner5 } from './ICPSigner5';

/**
 * Расширяет интерфейс ICPSigner5
 *
 * [CPDN: ICPSigner6](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signer6.html)
 */
export interface ICPSigner6 extends ICPSigner5 {
    /** Проводить проверку цепочки сертификатов перед созданием подписи, в том числе с учетом сроков действия закрытого ключа (private key usage period) */
    CheckCertificate: boolean;
}
