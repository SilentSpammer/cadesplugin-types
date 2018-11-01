import { CAPICOM_ENCODING_TYPE } from '../../enums/@';

export interface IEncodedData {
    Value(): string;
    Value(EncodingType: CAPICOM_ENCODING_TYPE): string;

    // Decoder(): any;

    // Format(bMultiLines?: boolean): string;
    readonly Format: string; // @TODO в документации - медот, на деле - свойство, которое не поддерживается... WTF?
}
