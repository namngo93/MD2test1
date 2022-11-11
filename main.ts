import {Library} from "./library";
import {LibraryManage} from "./libraryManage";
import {Magazine} from "./magazine";
import {Newspaper} from "./newspaper";

let l1 = new Library(1,'Xuất Bản GDND' , 20);
let m1 = new Magazine(4,'Xuất Bản Sadboy' , 50, 100, 10);
let n1 = new Newspaper(12,'Xuất Bản Nhi Đồng',30,2000)
LibraryManage.add(l1);
LibraryManage.add(m1);
LibraryManage.add(n1);
LibraryManage.display();
// EmployeeManager.deleteEmployee(1);
// console.log('--------Sau khi xóa-------')
// EmployeeManager.display();

let dai: Library = new Library(3, 'Xuất Bản Thiếu Niên', 100 );
LibraryManage.add(m1);
LibraryManage.editLibrary(4,l1 );
console.log('-----Sau khi thay----');
LibraryManage.add(m1);LibraryManage.display();