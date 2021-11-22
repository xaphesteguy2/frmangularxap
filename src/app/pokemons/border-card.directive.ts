import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[pkmnBoarderCard]'
})
export class BoarderCardDirective {
    @Input('pkmnBoarderCard') borderColor: string;

    constructor(private el: ElementRef) {
        this.setBorder('#f5f5f5');
        this.setHeight(180);
    }

    @HostListener('mouseenter') onMouseEnter() {
        if (this.borderColor) {
            if (this.borderColor == '#FFFFFF') {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                console.log('var color =' + color);

                this.setBorder(color);
            } else {
                this.setBorder(this.borderColor);
            }
        } else {
            this.setBorder('#F80808');
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('#f5f5f5');
    }

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';

    }
}
