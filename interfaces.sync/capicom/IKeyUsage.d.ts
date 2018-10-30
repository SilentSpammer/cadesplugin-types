export interface IKeyUsage {
    readonly IsCritical: 0 | 1; // boolean
    readonly IsCRLSignEnabled: 0 | 1; // boolean
    readonly IsDataEnciphermentEnabled: 0 | 1; // boolean
    readonly IsDecipherOnlyEnabled: 0 | 1; // boolean
    readonly IsDigitalSignatureEnabled: 0 | 1; // boolean
    readonly IsEncipherOnlyEnabled: 0 | 1; // boolean
    readonly IsKeyAgreementEnabled: 0 | 1; // boolean
    readonly IsKeyCertSignEnabled: 0 | 1; // boolean
    readonly IsKeyEnciphermentEnabled: 0 | 1; // boolean
    readonly IsNonRepudiationEnabled: 0 | 1; // boolean
    readonly IsPresent: 0 | 1; // boolean
}
