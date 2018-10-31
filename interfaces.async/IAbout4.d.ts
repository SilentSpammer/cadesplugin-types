import { IAbout3 } from './IAbout3';

/**
 * Расширяет интерфейс IAbout3
 *
 * [CPDN: IAbout4](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_about4.html)
 */
export interface IAbout4 extends IAbout3 {
    /**
     * Возвращает наименование криптопровайдера (CSP)
     *
     * @param ProviderType Тип криптопровайдера. Если не указан, то будет использован 75
     *
     * @returns Строковое представление наименования криптопровайдера
     *
     * [CPDN: IAbout4::CSPName](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_about4_0dcc4d03e32ffceb3386f7893524c97e_10dcc4d03e32ffceb3386f7893524c97e.html)
     */
    CSPName(ProviderType: number): Promise<string>;
    CSPName(): Promise<string>;
}
