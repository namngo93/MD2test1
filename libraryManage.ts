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

    static deleteLibrary(nCode: number): void {
        for (let i = 0; i < LibraryManage.listEmployee.length; i++) {
            if (LibraryManage.listEmployee[i].nCode === nCode) {
                LibraryManage.listEmployee.splice(i, 1);
            }
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