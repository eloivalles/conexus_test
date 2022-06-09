import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { UserNotesComponent } from "./pages/user-notes/user-notes.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";

const routes: Route[] = [
  {
    path: "users-list",
    component: UsersListComponent,
  },
  {
    path: "user-notes/:userId",
    component: UserNotesComponent,
  },
  { path: "", redirectTo: "users-list", pathMatch: "full" },
  { path: "**", redirectTo: "users-list", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
