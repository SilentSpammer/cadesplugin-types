import { CAPICOM_EKU } from '../../enums/@';

export interface IEKU {
    readonly Name: Promise<CAPICOM_EKU>;
    propset_Name(value: CAPICOM_EKU): Promise<void>;
    readonly OID: Promise<string>;
    propset_OID(value: string): Promise<void>;
}
