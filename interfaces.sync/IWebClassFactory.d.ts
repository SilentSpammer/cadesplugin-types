import { ProgIds } from '../enums/@';

import { IAbout4 } from './IAbout4';
import { ICPSignedData5 } from './ICPSignedData5';
import { ICPAttribute2 } from './ICPAttribute2';
import { ICertificate2 } from './capicom/ICertificate2';
import { ICPEnvelopedData2 } from './ICPEnvelopedData2';
import { IHashedData } from './capicom/IHashedData';
import { ICPSigner6 } from './ICPSigner6';
import { IRawSignature } from './IRawSignature';
import { ISignedXML } from './ISignedXML';
import { ISymmetricAlgorithm } from './ISymmetricAlgorithm';
import { IStore } from './capicom/IStore';

/**
 * Фабрика для создания объектов
 *
 * [CPDN: IWebClassFactory](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_web_class_factory.html)
 */
export interface IWebClassFactory {
    /** Создает запрашиваемый объект */
    CreateObject(strProgID: ProgIds.About): IAbout4;
    CreateObject(strProgID: ProgIds.CadesSignedData): ICPSignedData5;
    CreateObject(strProgID: ProgIds.CPAttribute): ICPAttribute2;
    CreateObject(strProgID: ProgIds.CPCertificate): ICertificate2; // ???
    CreateObject(strProgID: ProgIds.CPEnvelopedData): ICPEnvelopedData2;
    CreateObject(strProgID: ProgIds.CPHashedData): IHashedData; // ???
    CreateObject(strProgID: ProgIds.CPSigner): ICPSigner6;
    CreateObject(strProgID: ProgIds.PrivateKeyUsageValidator): any; // ???
    CreateObject(strProgID: ProgIds.RawSignature): IRawSignature;
    CreateObject(strProgID: ProgIds.SignedXML): ISignedXML;
    CreateObject(strProgID: ProgIds.Store): IStore;
    CreateObject(strProgID: ProgIds.SymmetricAlgorithm): ISymmetricAlgorithm;
    CreateObject<T = any>(strProgID: ProgIds | string): T;
}
