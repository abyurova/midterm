import { Component, OnInit } from '@angular/core';
import { ViewContainerRef, ViewChild, ComponentFactoryResolver  } from '@angular/core';
import { DetailComponent } from './../detail/detail.component';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  @ViewChild('detail', { read: ViewContainerRef })
  private detailContainer: ViewContainerRef;

  public author:string;
  public text:string;
  public title : string;
  
  private added:number[] = []; 
  private ids = 0;

  constructor( private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  add(){
    this.added.push(this.ids);
    const factory = this.cfr.resolveComponentFactory(DetailComponent);
    const componentRef = this.detailContainer.createComponent(factory);
    componentRef.instance.author = this.author;
    componentRef.instance.text = this.text;
    componentRef.instance.id = this.ids++;   

    componentRef.instance.onDeleteSelected.subscribe((data) => {      
      for(let i = 0; i < this.added.length; i++) {
        if(this.added[i] === data) {
          this.added.splice(i, 1);
          this.detailContainer.remove(i)
          return;
        }
      }
    }); 

  }


}
