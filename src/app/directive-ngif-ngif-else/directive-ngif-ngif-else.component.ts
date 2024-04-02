import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-ngif-ngif-else',
  templateUrl: './directive-ngif-ngif-else.component.html',
  styleUrls: ['./directive-ngif-ngif-else.component.css']
})
export class DirectiveNgifNgifElseComponent {

  isShow:boolean = true;
  toggle(){
    this.isShow = !this.isShow
  }
}
