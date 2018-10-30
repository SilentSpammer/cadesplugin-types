import { ICPSigner4 } from './ICPSigner4';
import { ISignatureStatus } from './ISignatureStatus';

/**
 * Расширяет интерфейс ICPSigner4
 *
 * [CPDN: ICPSigner5](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signer5.html)
 */
export interface ICPSigner5 extends ICPSigner4 {
    /** Статус электронной подписи */
    readonly SignatureStatus: Promise<ISignatureStatus>;
    propset_SignatureStatus(value: ISignatureStatus): Promise<void>;
}
