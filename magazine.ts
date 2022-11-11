import {Library} from "./library";
export class Magazine extends Library{
    private _aNumber !: number;
    private _releaseMonth !: number;


    constructor(nCode: number, imprint: string, nRelease: number, aNumber: number, releaseMonth: number) {
        super(nCode, imprint, nRelease);
        this._aNumber = aNumber;
        this._releaseMonth = releaseMonth;
    }


    get aNumber(): number {
        return this._aNumber;
    }

    set aNumber(value: number) {
        this._aNumber = value;
    }

    get releaseMonth(): number {
        return this._releaseMonth;
    }

    set releaseMonth(value: number) {
        this._releaseMonth = value;
    }
}