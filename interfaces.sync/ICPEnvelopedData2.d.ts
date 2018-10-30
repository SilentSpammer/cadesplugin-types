import { ICPEnvelopedData } from './ICPEnvelopedData';

/**
 * Предоставляет свойства и методы для работы с зашифрованным сообщением. Расширяет интерфейс ICPEnvelopedData
 *
 * [CPDN: ICPEnvelopedData2](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_enveloped_data2.html)
 */
export interface ICPEnvelopedData2 extends ICPEnvelopedData {
    /** Расшифровывает блок данных, используя данный сертификат */
    StreamDecrypt(pbData: string, isFinal: boolean): string | null;

    /** Шифрует блок данных, используя данный сертификат */
    StreamDecrypt(pbData: string, isFinal: boolean): string | null;
}
