import { ICPSigner } from './ICPSigner';

/**
 * Предоставляет дополнительный метод Display. Расширяет интерфейс ICPSigner
 *
 * [CPDN: ICPSigner2](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signer2.html)
 */
export interface ICPSigner2 extends ICPSigner {
    /** Отображает диалоговое окно со свойствами ЭЦП */
    // Display(hwndParent?: number, Title?: string): void;
}
