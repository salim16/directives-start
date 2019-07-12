import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // This is property binding only 
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // @Input('appUnless') set unless(condition: boolean) {
  //   if(!condition) {
  //     this.vcRef.createEmbeddedView(this.templateRef);
  //   } else {
  //     this.vcRef.clear();
  //   }
  // }


  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
