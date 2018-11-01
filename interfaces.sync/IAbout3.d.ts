import { IAbout } from './IAbout';
import { IVersion } from './IVersion';

/**
 * Расширяет интерфейс IAbout
 *
 * [CPDN: IAbout3::CSPVersion](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_about3_4aad0689dad37147a51b0da0b77ebf20_14aad0689dad37147a51b0da0b77ebf20.html)
 */
export interface IAbout3 extends IAbout {
    /** Возвращает объект IVersion c версией плагина */
    readonly PluginVersion: IVersion;

    /**
     * Возвращает объект IVersion c версией криптопровайдера (CSP) производства компании Крипто-Про
     *
     * _Для получения версий криптопровайдеров отличных от Крипто-Про можно использовать функцию CSPVersion с соответствующими параметрами, при этом BuildVersion всегда будет содержать ноли_
     *
     * @param ProviderName Имя криптопровайдера. Если не задано, то будет указан криптопровайдер по умолчанию
     * @param ProviderType Тип криптопровайдера. Если не указан, то будет использован 75
     *
     * @returns Объект IVersion
     *
     * [CPDN: ]
     */
    CSPVersion(): IVersion;
    CSPVersion(ProviderName: string): IVersion;
    CSPVersion(ProviderName: string, ProviderType: number): IVersion;
}
