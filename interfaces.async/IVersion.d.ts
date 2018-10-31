/**
 * Описывает версию
 *
 * _При помощи данного интерфейса можно получить строковое представление версии либо отдельные компоненты версии_
 *
 * [CPDN: IVersion](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_version.html)
 */
export interface IVersion {
    /** Возвращает старший компонент версии */
    readonly MajorVersion: Promise<number>;

    /** Возвращает младший компонент версии */
    readonly MinorVersion: Promise<number>;

    /** Возвращает номер сборки */
    readonly BuildVersion: Promise<number>;

    /** Возвращает строковое представление версии */
    toString(): Promise<string>;
}
