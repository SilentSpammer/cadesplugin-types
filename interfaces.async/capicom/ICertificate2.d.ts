import { ICertificate } from './ICertificate';
import { IBasicConstraints } from './IBasicConstraints';
import { IExtendedKeyUsage } from './IExtendedKeyUsage';
import { ICertificateStatus } from './ICertificateStatus';
import { IKeyUsage } from './IKeyUsage';
import { IPublicKey } from './IPublicKey';
import { CAPICOM_ENCODING_TYPE, CAPICOM_CERT_INFO_TYPE } from '../../enums/@';

/**
 * The Certificate object represents a single digital certificate
 *
 * [MS Docs: Certificate](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/certificate)
 */
export interface ICertificate2 extends ICertificate {
    // @TODO fill
    // Archived: boolean; // @TODO в MS Docs описан, но на деле нету...
    // propset_Archived(value: any): Promise<void>;
    readonly IssuerName: Promise<string>;
    readonly PrivateKey: Promise<any>; // @TODO check reasons to describe
    propset_PrivateKey(value: any): Promise<void>;
    readonly SerialNumber: Promise<string>;
    readonly SubjectName: Promise<string>;
    readonly Thumbprint: Promise<string>;
    readonly ValidFromDate: Promise<string>; // ISO string
    readonly ValidToDate: Promise<string>; // ISO string
    readonly Version: Promise<number>;

    BasicConstraints(): Promise<IBasicConstraints>;
    // Display(): void;
    Export(EncodingType?: CAPICOM_ENCODING_TYPE): Promise<string>;
    ExtendedKeyUsage(): Promise<IExtendedKeyUsage>;
    // ExtendedProperties(): any;
    // Extensions(): any;
    GetInfo(InfoType: CAPICOM_CERT_INFO_TYPE): Promise<string>;
    HasPrivateKey(): Promise<boolean>;
    Import(EncodedCertificate: string): Promise<void>;
    IsValid(): Promise<ICertificateStatus>;
    KeyUsage(): Promise<IKeyUsage>;
    Load(): any;
    PublicKey(): Promise<IPublicKey>;
    Save(): any;
    Template(): any;
}
