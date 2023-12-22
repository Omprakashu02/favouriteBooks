import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { AddUpdateBooks } from '../favroite-books/favroite-books.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-update-books',
  templateUrl: './add-update-books.component.html',
  styleUrls: ['./add-update-books.component.scss']
})
export class AddUpdateBooksComponent implements OnInit{
  addUpdateBooks = new AddUpdateBooks();
  isEdit = false;

  @ViewChild('bookAddUpdateForm') bookAddUpdateForm : NgForm | undefined

  constructor(public activeModal: NgbActiveModal,private ngbDateFormatter : NgbDateParserFormatter){

  }
  ngOnInit(): void {
    if(this.isEdit){
      const date:any  = this.ngbDateFormatter.parse(this.addUpdateBooks.publishedDate);
      this.addUpdateBooks.publishedDate = date;
    }

  }


  addEditBooks(){
    console.log(this.addUpdateBooks);
    if(this.bookAddUpdateForm?.valid){
      const date:any  = this.ngbDateFormatter.format(this.addUpdateBooks.publishedDate);
      this.addUpdateBooks.publishedDate = date;
      this.activeModal.close({isSuccess:true , item:this.addUpdateBooks ,isEdit  :this.isEdit})
    }


  }
}
