import { CADESCOM_CADES_TYPE, CAPICOM_ENCODING_TYPE } from '../enums/@';

import { ISigner } from './capicom/ISigner';
import { ICPSignedData3 } from './ICPSignedData3';
import { IHashedData } from './capicom/IHashedData';

/**
 * Предоставляет свойства и методы для работы с подписанным сообщением. Расширяет интерфейс ICPSignedData3
 *
 * [CPDN: ICPSignedData4](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signed_data4.html)
 */
export interface ICPSignedData4 extends ICPSignedData3 {
    /** Добавляет к сообщению усовершенствованную подпись */
    CoSignHash(Hash: IHashedData, Signer?: ISigner, CadesType?: CADESCOM_CADES_TYPE, EncodingType?: CAPICOM_ENCODING_TYPE): Promise<string>;

    /** Создает усовершенствованную подпись */
    SignHash(Hash: IHashedData, Signer?: ISigner, CadesType?: CADESCOM_CADES_TYPE, EncodingType?: CAPICOM_ENCODING_TYPE): Promise<string>;

    /** Проверяет усовершенствованную подпись на основе переданного хэш-значения */
    VerifyHash(Hash: IHashedData, SignedMessage: string, CadesType?: CADESCOM_CADES_TYPE): Promise<void>;
}
