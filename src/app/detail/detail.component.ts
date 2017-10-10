import { Component, OnInit,ComponentFactoryResolver  } from '@angular/core';
import { ViewContainerRef, ViewChild  } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { Subject } from 'rxjs/Subject';
import * as moment from 'moment';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @ViewChild('detail', { read: ViewContainerRef })
  private commentContainer: ViewContainerRef;

  public author:string;
  public text:string;
  public id:number;
  public likeCounter : number;
  public myDate  = moment().format("MMM Do YY"); 
  public comment  : string;
 
  private added:number[] = []; 
  private ids = 0;
 
  private subject = new Subject<number>();
  public onDeleteSelected = this.subject.asObservable();
  
  constructor( private cfr: ComponentFactoryResolver) { }
  delete(){
    this.subject.next(this.id);
  }
  like(){
    this.likeCounter = 1;
  }
  addComment(){
    this.added.push(this.ids);
    const factory = this.cfr.resolveComponentFactory(CommentComponent);
    const componentRef = this.commentContainer.createComponent(factory);
    
  }
  ngOnInit() {
  }

}
