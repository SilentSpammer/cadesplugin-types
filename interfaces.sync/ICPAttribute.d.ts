import { IOID } from './capicom/IOID';

/**
 * Описывает атрибут (подписанный или неподписанный)
 *
 * _Посредством этого объекта осуществляется работа с отдельными атрибутами (подписанными и неподписанными) усовершенствованной подписи_
 *
 * [CPDN: ICPAttribute](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_attribute.html)
 */
export interface ICPAttribute {
    /** Возвращает объектный идентификатор (OID) атрибута */
    readonly OID: IOID;

    /** Возвращает закодированное значение атрибута */
    Value: string;
}
