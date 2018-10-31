import { CADESCOM_CONTENT_ENCODING_TYPE } from '../enums/@';

import { IEnvelopedData } from './capicom/IEnvelopedData';

/**
 * Предоставляет свойства и методы для работы с зашифрованным сообщением. Расширяет интерфейс объекта [CAPICOM.EnvelopedData](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/envelopeddata)
 *
 * [CPDN: ICPEnvelopedData](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_enveloped_data.html)
 */
export interface ICPEnvelopedData extends IEnvelopedData {
    /** Способ кодирования данных */
    readonly ContentEncoding: Promise<CADESCOM_CONTENT_ENCODING_TYPE>;
    propset_ContentEncoding(value: CADESCOM_CONTENT_ENCODING_TYPE): Promise<void>;
}
