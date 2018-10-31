import { CAPICOM_ENCODING_TYPE, CAPICOM_SIGNED_DATA_VERIFY_FLAG } from '../../enums/@';
import { ICertificates } from './ICertificates';
import { ISigners } from './ISigners';
import { ISigner } from './ISigner';

/**
 * The SignedData object provides properties and methods to establish the content to be signed with a digital signature, to sign or cosign data digitally, and to verify the digital signature of signed data. The signed message is in PKCS #7 format.
 *
 * A data signature, if verified, proves the association between a signer and data and shows that the data was not changed in any way after the signature was created.
 *
 * [MS Docs: SignedData](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/signeddata)
 */
export interface ISignedData {
    readonly Certificates: Promise<ICertificates>;
    readonly Signers: Promise<ISigners>;
    readonly Content: Promise<string>;
    propset_Content(value: string): Promise<void>;

    CoSign(Signer?: ISigner, EncodingType?: CAPICOM_ENCODING_TYPE): Promise<string>;
    Sign(Signer?: ISigner, bDetached?: boolean, EncodingType?: CAPICOM_ENCODING_TYPE): Promise<string>;
    Verify(SignedMessage: string, bDetached?: boolean, VerifyFlag?: CAPICOM_SIGNED_DATA_VERIFY_FLAG): Promise<string>;
}

// @TODO: descriptions
