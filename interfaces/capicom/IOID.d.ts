import { CAPICOM_OID } from '../../enums/@';

export interface IOID {
    readonly FriendlyName: Promise<string>;
    propset_FriendlyName(value: string): Promise<void>;
    readonly Name: Promise<CAPICOM_OID>;
    propset_Name(value: CAPICOM_OID): Promise<void>;
    readonly Value: Promise<string>;
    propset_Value(value: string): Promise<void>;
}
