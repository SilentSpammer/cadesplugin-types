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
    readonly Content: Promise<string>;
    propset_Content(value: string): Promise<void>;

    /** Uniform Resource Identifier (URI) алгоритма хэширования */
    readonly DigestMethod: Promise<string>;
    propset_DigestMethod(value: string): Promise<void>;

    /** Uniform Resource Identifier (URI) алгоритма подписи */
    readonly SignatureMethod: Promise<string>;
    propset_SignatureMethod(value: string): Promise<void>;

    /** Тип подписи */
    readonly SignatureType: Promise<CADESCOM_XML_SIGNATURE_TYPE>;
    propset_SignatureType(value: CADESCOM_XML_SIGNATURE_TYPE): Promise<void>;

    /** Коллекция подписей */
    readonly Signers: Promise<ISigners>;

    /** Создает подпись */
    Sign(Signer: ISigner, XPath: string): Promise<string>;
    Sign(Signer: ISigner): Promise<string>;
    Sign(): Promise<string>;

    /** Проверяет подпись под документом XML */
    Verify(SignedMessage: string, XPath: string): Promise<void>;
    Verify(SignedMessage: string): Promise<void>;
}
