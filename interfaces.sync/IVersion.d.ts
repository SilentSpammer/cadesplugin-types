/**
 * Описывает версию
 *
 * _При помощи данного интерфейса можно получить строковое представление версии либо отдельные компоненты версии_
 *
 * [CPDN: IVersion](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_version.html)
 */
export interface IVersion {
    /** Возвращает старший компонент версии */
    readonly MajorVersion: number;

    /** Возвращает младший компонент версии */
    readonly MinorVersion: number;

    /** Возвращает номер сборки */
    readonly BuildVersion: number;

    /** Возвращает строковое представление версии */
    toString(): string;
}
