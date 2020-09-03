import { DefaultCellTypes } from './../core';
import { FlagCell } from './flagCell/FlagCellTemplate';

export interface Config {
    pinToBody: boolean;
    enableAdditionalContent: boolean;
    flexRow: boolean;

    rgViewportHeight: number;
    rgViewportWidth: number;
    margin: string;

    cellHeight: number;
    cellWidth: number;
    minCellWidth: number;
    fillHandleWidth: number;
    enableRangeSelection: boolean;
    enableFillHandle: boolean;
    enableFullWidthHeader: boolean;
    enableGroupIdRender: boolean;

    columns: number;
    rows: number;

    lineWidth: number;

    stickyTop: number;
    stickyBottom: number;
    stickyLeft: number;
    stickyRight: number;

    firstRowType: DefaultCellTypes['type'] | FlagCell['type'];
}

export declare const config: Config;