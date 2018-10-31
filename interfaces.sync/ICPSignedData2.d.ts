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
    CoSignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE, EncodingType: CAPICOM_ENCODING_TYPE): string;
    CoSignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE): string;
    CoSignCades(Signer: ISigner): string;
    CoSignCades(): string;

    /** Позволяет дополнить подпись до усовершенствованной */
    EnhanceCades(CadesType: CADESCOM_CADES_TYPE, TSAAddress: string, EncodingType: CAPICOM_ENCODING_TYPE): string;
    EnhanceCades(CadesType: CADESCOM_CADES_TYPE, TSAAddress: string): string;
    EnhanceCades(CadesType: CADESCOM_CADES_TYPE): string;
    EnhanceCades(): string;

    /** Добавляет к сообщению усовершенствованную подпись */
    SignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE, bDetached: boolean, EncodingType: CAPICOM_ENCODING_TYPE): string;
    SignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE, bDetached: boolean): string;
    SignCades(Signer: ISigner, CadesType: CADESCOM_CADES_TYPE): string;
    SignCades(Signer: ISigner): string;
    SignCades(): string;

    /** Проверяет усовершенствованную подпись */
    VerifyCades(SignedMessage: string, CadesType: CADESCOM_CADES_TYPE): boolean;
    VerifyCades(SignedMessage: string): boolean;
}
