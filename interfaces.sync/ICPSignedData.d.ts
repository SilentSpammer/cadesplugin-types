import { ISignedData } from './capicom/ISignedData';

/**
 * Предоставляет свойства и методы для работы с подписанным сообщением. Расширяет интерфейс объекта [CAPICOM.SignedData](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/signeddata)
 *
 * [CPDN: ICPSignedData](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signed_data.html)
 */
export interface ICPSignedData extends ISignedData {
    /** Отображает диалоговое окно со сведениями о подписях */
    // Display(hwndParent?: number, Title?: string): void;
}
