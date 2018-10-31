import { IOID } from './IOID';
import { IEncodedData } from './IEncodedData';

export interface IPublicKey {
    readonly Algorithm: Promise<IOID>;
    readonly EncodedKey: Promise<IEncodedData>;
    readonly EncodedParameters: Promise<IEncodedData>;
    readonly Length: Promise<number>;
}
