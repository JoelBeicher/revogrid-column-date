import { ColumnEditor } from './editor';
export declare const Revogrid: any;
export default class ColumnType {
    constructor();
    readonly editor: typeof ColumnEditor;
    cellTemplate: (h: any, { model, prop }: any) => any[];
    private loadCustomComponent;
}
