import { Directive, HostBinding, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appColored]'
})

export class ColoredDirective implements OnInit {
  @Input() date!: string;  

  @HostBinding('style.border-color') borderColor!:string;

  private checkDate(date: Date, month: number, type: 'month' | 'day' = 'month'){
    const d = new Date(Date.now());
    type === 'month' ? d.setMonth(d.getMonth() - month) : d.setDate(d.getDate() - 7);
    return date > d;
  }

  private colors = {
    old: 'red',
    older: 'yellow',
    middle: 'green',
    young: 'blue',
  } 

  ngOnInit(): void {
    const currentDate = new Date(this.date);    
    
    if(this.checkDate(currentDate, 1)){
      this.borderColor = this.checkDate(currentDate, 7, 'day') ? this.colors.young : this.colors.middle; 
    } else {
      this.borderColor = this.checkDate(currentDate, 6) ? this.colors.older : this.colors.old; 
    }    
  } 
}