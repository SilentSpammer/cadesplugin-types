import { ICPAttribute } from './ICPAttribute';
import { CADESCOM_ATTRIBUTE, CAPICOM_ENCODING_TYPE } from '../enums/@';

/**
 * Описывает атрибут (подписанный или неподписанный)
 *
 * _Посредством этого объекта осуществляется работа с отдельными атрибутами (подписанными и неподписанными) усовершенствованной подписи. Расширяет интерфейс ICPAttribute_
 *
 * [CPDN: ICPAttribute2](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_attribute2.html)
 */
export interface ICPAttribute2 extends ICPAttribute {
    /** Имя атрибута. Данное свойство аналогично свойству Name объекта CAPICOM.Attribute */
    readonly Name: Promise<CADESCOM_ATTRIBUTE>;
    propset_Name(value: CADESCOM_ATTRIBUTE): Promise<void>;

    /**
     * Способ кодирования значения атрибута
     *
     * _Данный параметр должен быть указан до того, как будет присвоено или получено значение свойства Value_
     *
     * По умолчанию используется значение `CAPICOM_ENCODE_ANY`
     */
    readonly ValueEncoding: Promise<CAPICOM_ENCODING_TYPE>;
    propset_ValueEncoding(value: CAPICOM_ENCODING_TYPE): Promise<void>;
}
