import { ICPSigner3 } from './ICPSigner3';

/**
 * Расширяет интерфейс ICPSigner3
 *
 * [CPDN: ICPSigner4](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signer4.html)
 */
export interface ICPSigner4 extends ICPSigner3 {
    /** Пин-код для доступа к закрытому ключу */
    KeyPin: Promise<string>;
    propset_KeyPin(value: string): Promise<void>;
}
