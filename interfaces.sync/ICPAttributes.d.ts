import { ICPAttribute2 } from './ICPAttribute2';

/**
 * Описывает коллекцию атрибутов (подписанных или неподписанных)
 *
 * _Посредством этого объекта осуществляется работа с отдельными атрибутами (подписанными и неподписанными) усовершенствованной подписи_
 *
 * [CPDN: ICPAttributes](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_attributes.html)
 */
export interface ICPAttributes {
    /** Возвращает количество атрибутов в коллекции */
    readonly Count: number;

    /** Добавляет атрибут в коллекцию */
    Add(Attribute: ICPAttribute2): void;

    /** Удаляет все атрибуты из коллекции */
    Clear(): void;

    /** Удаляет атрибут из коллекции */
    Remove(Index: number): void;

    /** Возвращает атрибут из коллекции по его индексу */
    Item(Index: number): ICPAttribute2;
}
