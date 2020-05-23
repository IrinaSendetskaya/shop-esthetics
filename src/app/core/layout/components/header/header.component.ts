import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Input() public items: SideNavRoute[];
  // @Input() public labsMode: boolean;
  public title: string;
  public logoSrc: string;

  public items = [];
  public labsMode: boolean;

  constructor(
    // private router: Router,
  ) {}

  ngOnInit() {
    this.title='4esthetics';
    this.logoSrc='/assets/icons/logo.png';
    // if (this.router.url.indexOf('/labs/') === 0) {
    //   this.items = labsSideNavGroups;
    //   this.labsMode = true;
    // } else {
    //   this.items = sideNavGroups;
    // }
  }
}
