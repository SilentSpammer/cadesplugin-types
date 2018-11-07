import { ProgIds } from '../enums/@';

import { IAbout4 } from './IAbout4';
import { ICPSignedData5 } from './ICPSignedData5';
import { ICPAttribute2 } from './ICPAttribute2';
import { ICertificate2 } from './capicom/ICertificate2';
import { ICPEnvelopedData2 } from './ICPEnvelopedData2';
import { ICPHashedData } from './ICPHashedData';
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
    CreateObjectAsync(strProgID: ProgIds.About): Promise<IAbout4>;
    CreateObjectAsync(strProgID: ProgIds.CadesSignedData): Promise<ICPSignedData5>;
    CreateObjectAsync(strProgID: ProgIds.CPAttribute): Promise<ICPAttribute2>;
    CreateObjectAsync(strProgID: ProgIds.CPCertificate): Promise<ICertificate2>; // ???
    CreateObjectAsync(strProgID: ProgIds.CPEnvelopedData): Promise<ICPEnvelopedData2>;
    CreateObjectAsync(strProgID: ProgIds.CPHashedData): Promise<ICPHashedData>; // ???
    CreateObjectAsync(strProgID: ProgIds.CPSigner): Promise<ICPSigner6>;
    CreateObjectAsync(strProgID: ProgIds.PrivateKeyUsageValidator): Promise<any>; // ???
    CreateObjectAsync(strProgID: ProgIds.RawSignature): Promise<IRawSignature>;
    CreateObjectAsync(strProgID: ProgIds.SignedXML): Promise<ISignedXML>;
    CreateObjectAsync(strProgID: ProgIds.Store): Promise<IStore>;
    CreateObjectAsync(strProgID: ProgIds.SymmetricAlgorithm): Promise<ISymmetricAlgorithm>;
    CreateObjectAsync<T = any>(strProgID: ProgIds | string): Promise<T>;
}
