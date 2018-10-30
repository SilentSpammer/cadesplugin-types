import { ICPSignedData4 } from './ICPSignedData4';
import { CADESCOM_DISPLAY_DATA } from '../enums/@';

/**
 * Предоставляет свойства и методы для работы с подписанным сообщением. Расширяет интерфейс ICPSignedData4
 *
 * [CPDN: ICPSignedData5](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signed_data5.html)
 */
export interface ICPSignedData5 extends ICPSignedData4 {
    /** Расположение данных для отображения на специализированных устройствах */
    readonly DisplayData: Promise<CADESCOM_DISPLAY_DATA>;
    propset_DisplayData(value: CADESCOM_DISPLAY_DATA): Promise<void>;
}
