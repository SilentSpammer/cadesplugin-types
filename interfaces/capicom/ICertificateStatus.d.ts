import { ICertificates } from './ICertificates';
// import { CAPICOM_CHECK_FLAG } from '../../enums/@';

export interface ICertificateStatus {
    // Certificates: ICertificates;
    // CheckFlag: CAPICOM_CHECK_FLAG;
    readonly Result: Promise<boolean>;
    // UrlRetrievalTimeout: number;
    // VerificationTime: string;

    // ApplicationPolicies();
    // CertificatePolicies();
    // EKU();
}
