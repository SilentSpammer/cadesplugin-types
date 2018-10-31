import { CAPICOM_ENCODING_TYPE } from '../../enums/@';

export interface IEncodedData {
    Value(EncodingType: CAPICOM_ENCODING_TYPE): string;
    Value(): string;

    // Decoder(): any;

    // Format(bMultiLines?: boolean): string;
    readonly Format: string; // @TODO в документации - медот, на деле - свойство, которое не поддерживается... WTF?
}
