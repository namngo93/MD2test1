import {Library} from "./library";

export class Newspaper extends Library{
    private _aDate !: number;


    constructor(nCode: number, imprint: string, nRelease: number, aDate: number) {
        super(nCode, imprint, nRelease);
        this._aDate = aDate;
    }


    get aDate(): number {
        return this._aDate;
    }

    set aDate(value: number) {
        this._aDate = value;
    }
}
