/**
 * The CAPICOM_ENCODING_TYPE enumeration type indicates the encoding type used
 *
 * [MS Docs: CAPICOM_ENCODING_TYPE](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/capicom-encoding-type)
 */
export const enum CAPICOM_ENCODING_TYPE {
    /** Data is saved as a base64-encoded string or a pure binary sequence. This encoding type is used only for input data that has an unknown encoding type. Introduced in CAPICOM 2.0 */
    CAPICOM_ENCODE_ANY = -1,

    /** Data is saved as a base64-encoded string */
    CAPICOM_ENCODE_BASE64 = 0,

    /** Data is saved as a pure binary sequence */
    CAPICOM_ENCODE_BINARY = 1,
}
