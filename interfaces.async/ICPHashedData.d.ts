import { CADESCOM_CONTENT_ENCODING_TYPE } from '../enums/@';

import { IHashedData } from './capicom/IHashedData';

/**
 * Предоставляет свойства и методы для вычисления хэш-значения данных. Расширяет интерфейс объекта (CAPICOM.HashedData)[https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/hasheddata]
 *
 * [CPDN: ICPHashedData](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_hashed_data.html)
 */
export interface ICPHashedData extends IHashedData {
    /** Способ кодирования данных для хэширования */
    readonly DataEncoding: Promise<CADESCOM_CONTENT_ENCODING_TYPE>;
    propset_DataEncoding(value: CADESCOM_CONTENT_ENCODING_TYPE): Promise<void>;

    /** Позволяет проинициализировать объект готовым хэш-значением */
    SetHashValue(newVal: string): Promise<void>;
}
