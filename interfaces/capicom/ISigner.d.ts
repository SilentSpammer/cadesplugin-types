import { CAPICOM_CERTIFICATE_INCLUDE_OPTION } from '../../enums/@';
import { ICertificate } from './ICertificate';

/**
 *
 *
 * [MS Docs: Signer](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/signer)
 */
export interface ISigner {
    // readonly AuthenticatedAttributes: any; // не поддерживается, похоже, надо дергать AuthenticatedAttributes2 у ICPSigner
    readonly Certificate: Promise<ICertificate>;
    propset_Certificate(value: ICertificate): Promise<void>;
    readonly Options: Promise<CAPICOM_CERTIFICATE_INCLUDE_OPTION>;
    propset_Options(value: CAPICOM_CERTIFICATE_INCLUDE_OPTION): Promise<void>;

    // readonly Chain: any;
    // Load(FileName: string, Password?: string): void;
}
