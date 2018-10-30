import { IEKUs } from './IEKUs';

export interface IExtendedKeyUsage {
    readonly EKUs: IEKUs;
    readonly IsCritical: 0 | 1; // boolean
    readonly IsPresent: 0 | 1; // boolean
}
