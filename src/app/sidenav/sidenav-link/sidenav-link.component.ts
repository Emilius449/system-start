import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Router, RouterModule } from '@angular/router';
import { slideInOut } from 'src/app/shared/animation/slide-in-out.animation';
import { ROTATE } from 'src/app/shared/animation/rotate.animation';

@Component({
  selector: 'app-sidenav-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidenav-link.component.html',
  styleUrls: ['./sidenav-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ROTATE, slideInOut],
})
export class SidenavLinkComponent implements OnChanges {
  expanded = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: any;
  @Input() depth = 0;
  @Input() collapsed = false;

  constructor(public router: Router) {}
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
  }
  // ngOnInit() {
  // this.selectRouterDetails = this.store.pipe(select(selectRouterState));
  // this.selectRouterDetails.subscribe((routerState: any) => {
  //   const url: any = routerState.state.url;
  //   if (this.item.route && url) {
  //     this.expanded = url.indexOf(`/${this.item.route}`) === 0;
  //     this.ariaExpanded = this.expanded;
  //   }
  // });
  // }
  onItemSelected(item: any) {
    if (!item.children || !item.children.length) {
      // this.router.navigate([item.route]);
      // this.sidebarService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
