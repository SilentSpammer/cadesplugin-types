import { ICertificate2 } from './capicom/ICertificate2';

/**
 * Предоставляет методы для работы с сертификатом открытого ключа. Расширяет интерфейс [CAPICOM.Certificate](https://docs.microsoft.com/ru-ru/windows/desktop/SecCrypto/certificate)
 *
 * _Интерфейс `ICPCertificate` наследуется от интерфейса `ICertificate2`. Таким образом, интерфейс `ICPCertificate` содержит все свойства и методы, предоставляемые интерфейсом `ICertificate2` и объектом `#СADESCOM.Certificate`, а также предоставляет ряд дополнительных методов_
 *
 * [CPDN: ICPCertificate](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_certificate.html)
 */
export interface ICPCertificate extends ICertificate2 {
    /**
     * Производит поиск закрытого ключа соответствующего сертификату открытого ключа и устанавливает ссылку на него
     *
     * В случае отсутствия в системе подходящего ключа порождает исключение
     */
    FindPrivateKey(): Promise<void>;
}
