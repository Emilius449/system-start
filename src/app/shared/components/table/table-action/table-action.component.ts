import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table-action',
  standalone: true,
  imports: [],
  template: ``,
  styles: []
})
export class TableActionComponent {
  @Input({ required: true }) actionName? = 'default';
  @Input({ required: true }) templateRef!: TemplateRef<any>;
}
