import { Directive, HostBinding, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appColored]',
})
export class ColoredDirective implements OnInit {
  private colorClass!: string;

  private colors = {
    old: 'red',
    older: 'yellow',
    middle: 'green',
    young: 'blue',
  };

  @Input() date!: string;

  @HostBinding('class') get hostClasses(): string {
    return this.colorClass;
  }

  private checkDate(date: Date, month: number, type: 'month' | 'day' = 'month'): boolean {
    const d = new Date(Date.now());
    type === 'month' ? d.setMonth(d.getMonth() - month) : d.setDate(d.getDate() - 7);
    return date > d;
  }

  ngOnInit(): void {
    const currentDate = new Date(this.date);

    if (this.checkDate(currentDate, 1)) {
      this.colorClass = this.checkDate(currentDate, 7, 'day') ? this.colors.young : this.colors.middle;
      return;
    }

    this.colorClass = this.checkDate(currentDate, 6) ? this.colors.older : this.colors.old;
  }
}
