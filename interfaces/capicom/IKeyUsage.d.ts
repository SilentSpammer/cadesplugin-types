export interface IKeyUsage {
    readonly IsCritical: Promise<0 | 1>; // boolean
    readonly IsCRLSignEnabled: Promise<0 | 1>; // boolean
    readonly IsDataEnciphermentEnabled: Promise<0 | 1>; // boolean
    readonly IsDecipherOnlyEnabled: Promise<0 | 1>; // boolean
    readonly IsDigitalSignatureEnabled: Promise<0 | 1>; // boolean
    readonly IsEncipherOnlyEnabled: Promise<0 | 1>; // boolean
    readonly IsKeyAgreementEnabled: Promise<0 | 1>; // boolean
    readonly IsKeyCertSignEnabled: Promise<0 | 1>; // boolean
    readonly IsKeyEnciphermentEnabled: Promise<0 | 1>; // boolean
    readonly IsNonRepudiationEnabled: Promise<0 | 1>; // boolean
    readonly IsPresent: Promise<0 | 1>; // boolean
}
