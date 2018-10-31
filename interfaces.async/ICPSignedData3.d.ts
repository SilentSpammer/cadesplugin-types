import { ICPSignedData2 } from './ICPSignedData2';
import { CADESCOM_CONTENT_ENCODING_TYPE } from '../enums/@';

/**
 * Предоставляет свойства и методы для работы с подписанным сообщением. Расширяет интерфейс ICPSignedData2
 *
 * [CPDN: ICPSignedData3](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signed_data3.html)
 */
export interface ICPSignedData3 extends ICPSignedData2 {
    /** Способ кодирования данных для подписи */
    readonly ContentEncoding: Promise<CADESCOM_CONTENT_ENCODING_TYPE>;
    propset_ContentEncoding(value: CADESCOM_CONTENT_ENCODING_TYPE): Promise<void>;
}
