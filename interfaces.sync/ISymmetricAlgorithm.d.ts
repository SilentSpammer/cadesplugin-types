import { ICertificate } from './capicom/ICertificate';
import { CADESCOM_ENCRYPTION_ALGORITHM } from '../enums/@';

/**
 * Описывает симметричный ключ для шифрования по алгоритму ГОСТ 28147-89
 *
 * [CPDN: ISymmetricAlgorithm](http://cpdn.cryptopro.ru/default.asp?url=content/cades/interface_c_ad_e_s_c_o_m_1_1_i_symmetric_algorithm.html)
 */
export interface ISymmetricAlgorithm {
    /** Последовательность, используемая для диверсификации симметричного ключа */
    DiversData: string;

    /** Получает или задает вектор инициализации (IV) для алгоритма симметричного шифрования */
    IV: string;

    /** Расшифровывает блок данных, используя текущий ключ */
    Decrypt(pbData: string, isFinal: boolean): string;

    /** Генерирует новый ключ на основе текущего ключа и случайной последовательности. Возвращает новый обьект SymmetricAlgorithm */
    DiversifyKey(): ISymmetricAlgorithm;

    /** Шифрует блок данных, используя текущий ключ */
    Encrypt(pbData: string, isFinal: boolean): string;

    /** Экспортирует симметричный ключ в зашифрованном виде */
    ExportKey(pVal: ICertificate): string;

    /** Генерирует случайный ключ для использования в алгоритме симметричного шифрования */
    GenerateKey(): void;
    GenerateKey(algorithm: CADESCOM_ENCRYPTION_ALGORITHM): void;

    /** Импортирует ранее экспортированый симметричный ключ */
    ImportKey(pbData: string, pVal: ICertificate): void;
    ImportKey(pbData: string, pVal: ICertificate, Password: string): void;
}
