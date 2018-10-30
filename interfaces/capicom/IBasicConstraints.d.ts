export interface IBasicConstraints {
    readonly IsCertificateAuthority: Promise<0 | 1>; // boolean
    readonly IsCritical: Promise<0 | 1>; // boolean
    readonly IsPathLenConstraintPresent: Promise<0 | 1>; // boolean
    readonly IsPresent: Promise<0 | 1>; // boolean
    readonly PathLenConstraint: Promise<number>;
}
