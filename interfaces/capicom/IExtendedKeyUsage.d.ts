import { IEKUs } from './IEKUs';

export interface IExtendedKeyUsage {
    readonly EKUs: Promise<IEKUs>;
    readonly IsCritical: Promise<0 | 1>; // boolean
    readonly IsPresent: Promise<0 | 1>; // boolean
}
