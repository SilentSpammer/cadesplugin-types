import { ICPAttributes } from './ICPAttributes';
import { ICPBlobs } from './ICPBlobs';
import { ISigner } from './capicom/ISigner';

/**
 * Позволяет задать параметры создания и получить информацию об усовершенствованной подписи. Расширяет интерфейс объекта [CAPICOM.Signer](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/signer)
 *
 * [CPDN: ICPSigner](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_signer.html)
 */
export interface ICPSigner extends ISigner {
    /** Коллекция подписанных атрибутов */
    readonly AuthenticatedAttributes2: ICPAttributes;

    /** Коллекция СОС. Свойство доступно только для чтения */
    readonly CRLs: ICPBlobs;

    /** Коллекция ответов служб актуальных статусов. Свойство доступно только для чтения */
    readonly OCSPResponses: ICPBlobs;

    /** Адрес службы штампов времени */
    TSAAddress: string;

    /** Коллекция неподписанных атрибутов */
    readonly UnauthenticatedAttributes: ICPAttributes;
}
