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
    readonly IssuerName: string;
    PrivateKey: any; // @TODO check reasons to describe
    readonly SerialNumber: string;
    readonly SubjectName: string;
    readonly Thumbprint: string;
    readonly ValidFromDate: string; // ISO string
    readonly ValidToDate: string; // ISO string
    readonly Version: number;

    BasicConstraints(): IBasicConstraints;
    // Display(): void;
    Export(EncodingType?: CAPICOM_ENCODING_TYPE): string;
    ExtendedKeyUsage(): IExtendedKeyUsage;
    // ExtendedProperties(): any;
    // Extensions(): any;
    GetInfo(InfoType: CAPICOM_CERT_INFO_TYPE): string;
    HasPrivateKey(): boolean;
    Import(EncodedCertificate: string): void;
    IsValid(): ICertificateStatus;
    KeyUsage(): IKeyUsage;
    Load();
    PublicKey(): IPublicKey;
    Save();
    Template();
}
