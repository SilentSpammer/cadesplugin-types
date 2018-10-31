import { IEKU } from './IEKU';

export interface IEKUs {
    readonly Count: Promise<number>;

    Item(Index: number): Promise<IEKU>;
}
