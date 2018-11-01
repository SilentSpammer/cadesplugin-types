import { ISigner } from './capicom/ISigner';
import { ICPSignedData } from './ICPSignedData';
import { CADESCOM_CADES_TYPE, CAPICOM_ENCODING_TYPE } from '../enums/@';

/**
 * Предоставляет свойства и методы для работы с подписанным сообщением. Расширяет интерфейс ICPSignedData
 *
 * [CPDN: ICPSignedData2](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signed_data2.html)
 */
export interface ICPSignedData2 extends ICPSignedData {
    /** Добавляет к сообщению параллельную усовершенствованную подпись */
    CoSignCades(): Promise<string>;
    CoSignCades(Signer: ISigner): Promise<string>;
    CoSignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE): Promise<string>;
    CoSignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE, EncodingType: CAPICOM_ENCODING_TYPE): Promise<string>;

    /** Позволяет дополнить подпись до усовершенствованной */
    EnhanceCades(): Promise<string>;
    EnhanceCades(CadesType: CADESCOM_CADES_TYPE): Promise<string>;
    EnhanceCades(CadesType: CADESCOM_CADES_TYPE, TSAAddress: string): Promise<string>;
    EnhanceCades(CadesType: CADESCOM_CADES_TYPE, TSAAddress: string, EncodingType: CAPICOM_ENCODING_TYPE): Promise<string>;

    /** Добавляет к сообщению усовершенствованную подпись */
    SignCades(): Promise<string>;
    SignCades(Signer: ISigner): Promise<string>;
    SignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE): Promise<string>;
    SignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE, bDetached: boolean): Promise<string>;
    SignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE, bDetached: boolean, EncodingType: CAPICOM_ENCODING_TYPE): Promise<string>;

    /** Проверяет усовершенствованную подпись */
    VerifyCades(SignedMessage: string): Promise<boolean>;
    VerifyCades(SignedMessage: string, CadesType: CADESCOM_CADES_TYPE): Promise<boolean>;
}
