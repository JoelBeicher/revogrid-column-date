import { RevoGrid } from '@revolist/revogrid/dist/types/interfaces';
export interface DateConfig extends RevoGrid.ColumnRegular {
    valueAsDate?: boolean;
}
export declare type DateChangeEvent = {
    valueAsDate: Date;
    value: string;
};
