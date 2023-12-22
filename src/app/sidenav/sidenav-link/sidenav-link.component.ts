import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { slideInOut } from 'src/app/shared/animation/slide-in-out.animation';
import { ROTATE } from 'src/app/shared/animation/rotate.animation';
import { SideNavLink } from '../sidenav.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidenav-link',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './sidenav-link.component.html',
  styleUrls: ['./sidenav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ROTATE, slideInOut],
})
export class SidenavLinkComponent implements OnChanges {
  @Input() item: any;
  @Input() depth = 0;
  @Input() collapsed!: boolean;
  @Input() expanded!: boolean;
  @Output() itemSelected = new EventEmitter<SideNavLink>();

  constructor(public router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.item);
  }
  onItemSelected(item: SideNavLink) {
    this.itemSelected.emit(item);

    // if (this.item?.children && this.item?.children?.length) {
    //   for (let modelItem of this.item.children) {
    //     if (item !== modelItem && modelItem.expanded) {
    //       modelItem.expanded = false;
    //     }
    //   }
    // }
    // item.expanded = !item.expanded;
    // console.log('No Children', this.expanded);
    // console.log('item', item);
  }
}
