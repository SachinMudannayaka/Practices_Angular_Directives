import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  normalStyleBind="Normal Style Binding";
  ngStyleTopic:string="NgStyle Directive";
  ngUdemyC:string="ANGULAR UDEMY COURSE";
  isActive:boolean=true;



  postArray:Array<string>=['Post 1','Post 2','Post 3','Post 4','Post 5'];
  topicngDirect:string='Fetch Using ngFor Directive';
ngSwithCase:string='NG Swith Directives';
  stepForm:string='Something Else';

  topicClassDirective:string=' NgClass Directives';


objArray:Array<any>=[

]

  /*constructor(){
    for(let i=0;i<this.postArray.length;i++){
console.log(this.postArray[i]);
    }
}*/

addNew(){
this.objArray.push({id:5 ,postTitle:'Posts X'});
}
deleteObj(i:any){

  this.objArray.splice(i,1);
}

changeStepBtnValue(status:any){
this.stepForm=status;
}

}

