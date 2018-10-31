/**
 * Описывает текущую версию библиотеки
 *
 * _При помощи данного интерфейса можно получить строковое представление текущей версии библиотеки либо отдельные компоненты версии_
 *
 * [CPDN: IAbout](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_about.html)
 */
export interface IAbout {
    /** Возвращает строковое представление версии */
    readonly Version: Promise<string>;

    /** Возвращает старший компонент версии */
    readonly MajorVersion: Promise<number>;

    /** Возвращает младший компонент версии */
    readonly MinorVersion: Promise<number>;

    /** Возвращает номер сборки */
    readonly BuildVersion: Promise<number>;
}
