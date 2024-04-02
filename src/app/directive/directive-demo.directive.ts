import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveDemo]'
})
export class DirectiveDemoDirective {

  @Input('appDirectiveDemo') condition!:boolean;
  constructor(private ren:Renderer2,private el:ElementRef) { 
  }

  ngOnInit(){
    console.log("condition ", this.condition);
    if(this.condition){
      this.ren.addClass(this.el.nativeElement,'bg-primary');

    }else {
      this.ren.addClass(this.el.nativeElement,'bg-secondary');
    }
  }

}
