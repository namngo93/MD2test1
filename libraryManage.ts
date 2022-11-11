import {Library} from "./library";

export class LibraryManage {
    static listEmployee: Library[] = [];

    static add(library: Library): void{
        LibraryManage.listEmployee.push(library);
    }

    static display(): void {
        for (const library of LibraryManage.listEmployee) {
            console.table(library);
        }
    }

    static editLibrary(nCode: number, employeeEdit: Library): void {
        for (let i = 0; i < LibraryManage.listEmployee.length; i++) {
            if (LibraryManage.listEmployee[i].nCode === nCode) {
                LibraryManage.listEmployee[i] = employeeEdit;
            }
        }

    }
}