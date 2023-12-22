import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbDateParserFormatter, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateBooksComponent } from '../add-update-books/add-update-books.component';
import { AddUpdateBooks } from './favroite-books.model';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/services/storage.service';

@Component({
  selector: 'app-favroite-books',
  templateUrl: './favroite-books.component.html',
  styleUrls: ['./favroite-books.component.scss']
})
export class FavroiteBooksComponent implements OnInit ,OnDestroy {
  bookList:AddUpdateBooks[]=[
    {
      bookId:'1',
      title :'Habit Improve',
      author:'carl james',
      publishedDate:'1990-10-11',
      price:'30'
    }
]
constructor(private ngbModal : NgbModal ,private router :Router , private storageService : StorageService){

}

  ngOnInit(): void {
    const booksList= this.storageService.retrieve('bookList');
    if(booksList?.length){
      this.bookList = booksList;
    }
  }



addBooks(){

 const modalRef =  this.ngbModal.open(AddUpdateBooksComponent);
 modalRef.componentInstance.isEdit = false;
 modalRef.result.then((res)=>{
  if(res?.isSuccess){
    const addUpdatedBook = res?.item;
    if(res?.isEdit == false){
      this.bookList.push(addUpdatedBook);
      this.storageService.store('bookList',this.bookList)
    }
  }
 })
}

editBook(item:AddUpdateBooks , index:number){
  const modalRef =  this.ngbModal.open(AddUpdateBooksComponent);
  modalRef.componentInstance.isEdit = true;
  modalRef.componentInstance.addUpdateBooks = Object.assign({},item);
  modalRef.result.then((res)=>{
    if(res?.isSuccess){
      const addUpdatedBook = res?.item;
      if(res?.isEdit == true){
        this.bookList.splice(index, 1, addUpdatedBook);
        this.storageService.store('bookList',this.bookList)

      }

    }})
}

deleteBook(item:AddUpdateBooks , index :number){
this.bookList.splice(index ,1);
this.storageService.store('bookList',this.bookList)

}

logOut(){
this.router.navigate(["/login"]);
this.storageService.removeItem('userDetail')
}

ngOnDestroy(): void {
  console.log('destroy')
}

}
