/**
 * Описывает коллекцию бинарных объектов
 *
 * [CPDN: ICPBlobs](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_c_p_blobs.html)
 */
export interface ICPBlobs {
    /** Возвращает количество объектов в коллекции */
    readonly Count: Promise<number>;
}
