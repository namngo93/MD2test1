import {Library} from "./library";

export class Book extends Library{
    private _aName !: string;
    private _aPage !: number;


    constructor(nCode: number, imprint: string, nRelease: number, aName: string, aPage: number) {
        super(nCode, imprint, nRelease);
        this._aName = aName;
        this._aPage = aPage;
    }


    get aName(): string {
        return this._aName;
    }

    set aName(value: string) {
        this._aName = value;
    }

    get aPage(): number {
        return this._aPage;
    }

    set aPage(value: number) {
        this._aPage = value;
    }
}