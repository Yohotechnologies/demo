import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  onRoute(route: string, drawer) {
    this.router.navigate([route]);
    // drawer.close();
  }
}
