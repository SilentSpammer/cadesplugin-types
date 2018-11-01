import { CADESCOM_XML_SIGNATURE_TYPE } from '../enums/@';
import { ISigner } from './capicom/ISigner';
import { ISigners } from './capicom/ISigners';

/**
 * Предоставляет свойства и методы для работы с подписанным документом XML
 *
 * [CPDN: ISignedXML](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_signed_x_m_l.html)
 */
export interface ISignedXML {
    /** Подписываемые данные */
    Content: string;

    /** Uniform Resource Identifier (URI) алгоритма хэширования */
    DigestMethod: string;

    /** Uniform Resource Identifier (URI) алгоритма подписи */
    SignatureMethod: string;

    /** Тип подписи */
    SignatureType: CADESCOM_XML_SIGNATURE_TYPE;

    /** Коллекция подписей */
    readonly Signers: ISigners;

    /** Создает подпись */
    Sign(): string;
    Sign(Signer: ISigner): string;
    Sign(Signer: ISigner, XPath: string): string;

    /** Проверяет подпись под документом XML */
    Verify(SignedMessage: string): void;
    Verify(SignedMessage: string, XPath: string): void;
}
