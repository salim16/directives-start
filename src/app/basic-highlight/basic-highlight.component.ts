import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

    constructor(private elemeentRef: ElementRef) {
    }

    ngOnInit(): void {
        this.elemeentRef.nativeElement.style.backgroundColor = 'green';
    }

}