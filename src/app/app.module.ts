import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";
import { UserNotesComponent } from "./pages/user-notes/user-notes.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent, UsersListComponent, UserNotesComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
