import { IEKU } from './IEKU';

export interface IEKUs {
    readonly Count: number;

    Item(Index: number): IEKU;
}
