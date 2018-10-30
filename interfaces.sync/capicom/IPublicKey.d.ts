import { IOID } from './IOID';
import { IEncodedData } from './IEncodedData';

export interface IPublicKey {
    readonly Algorithm: IOID;
    readonly EncodedKey: IEncodedData;
    readonly EncodedParameters: IEncodedData;
    readonly Length: number;
}
