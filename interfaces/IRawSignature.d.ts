import { IHashedData } from './capicom/IHashedData';
import { ICertificate } from './capicom/ICertificate';

/**
 * Значение электронной подписи
 *
 * [CPDN: IRawSignature](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_raw_signature.html)
 */
export interface IRawSignature {
    /** Вычисляет значение электронной подписи */
    SignHash(Hash: IHashedData, Certificate?: ICertificate): Promise<string>;

    /** Проверяет значение электронной подписи на основе переданного хэш-значения */
    VerifyHash(Hash: IHashedData, Certificate: ICertificate, Signature: string): Promise<void>;
}
