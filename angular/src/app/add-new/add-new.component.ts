import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../service/news.service';
import { News } from '../dto/news';


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  public categorys=[];
  user = new News(0,"","","","","");
  @Input() abc:News;
  categoryHasError = true;
  submitted = false;
  errorMsg = '';
  constructor(private _newservice: NewsService) { }

 
  
  ngOnInit() {
    this._newservice.getCategory().subscribe(data=> this.categorys = data);
  }
  validateCategory(value) {
    if (value === '') {
      this.categoryHasError = true;
    } else {
      this.categoryHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._newservice.createNew(this.user)
      .subscribe(
        () => alert("Employee created successfully."),
        error => this.errorMsg = error.statusText
      )
  }

}
