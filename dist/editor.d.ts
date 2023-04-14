import '@duetds/date-picker/dist/duet/themes/default.css';
import './style.css';
import { Edition } from '@revolist/revogrid/dist/types/interfaces';
import { DateConfig } from './type';
export declare class ColumnEditor implements Edition.EditorBase {
    private column;
    private saveCallback;
    private calendar;
    private revoFloat;
    constructor(column: DateConfig, saveCallback: (value: any, preventFocus?: boolean) => void);
    element?: HTMLElement | null;
    editCell?: Edition.EditCell;
    componentDidRender(): void;
    disconnectedCallback(): void;
    private onFloatClick;
    render(h: any): JSX.Element;
}
