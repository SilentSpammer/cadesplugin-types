export interface IBasicConstraints {
    readonly IsCertificateAuthority: 0 | 1; // boolean
    readonly IsCritical: 0 | 1; // boolean
    readonly IsPathLenConstraintPresent: 0 | 1; // boolean
    readonly IsPresent: 0 | 1; // boolean
    readonly PathLenConstraint: number;
}
