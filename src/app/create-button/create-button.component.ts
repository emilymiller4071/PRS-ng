import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent {

    @Input()
    set text(name: string) {
      this.buttonText = name.toUpperCase();
    }
    get name(): string {
      return this.buttonText;
    }
  
    @Input() color: string = '0068B4';
    @Input() type: string = 'button';
    @Output() btnClick = new EventEmitter();
	  @Input() isDisabled = false;

    public buttonText = '';
  
    constructor() {}
  

  onClick() {
		this.btnClick.emit();
	}

}
