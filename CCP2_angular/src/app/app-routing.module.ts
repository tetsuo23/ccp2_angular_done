import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { CardComponent } from './card/card.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MemberComponent } from './member/member.component';
import { MemberAddComponent } from './member-add/member-add.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostShowComponent } from './post-show/post-show.component';
import { AdminPostComponent } from './admin-post/admin-post.component';



const routes: Routes = [
  { path: 'recrutement', component: RecrutementComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'card', component: CardComponent },
  { path: 'admin/post/create', component: PostCreateComponent },
  { path: 'mod/post/create', component: PostCreateComponent },
  { path: 'admin/post/:id', component: PostEditComponent },
  { path: 'post/:id', component: PostEditComponent },
  { path: 'adminPost', component: AdminPostComponent },
  { path: 'admin/users', component: MemberComponent },
  { path: 'member/create', component: MemberAddComponent },
  { path: 'contact/create', component: ContactAddComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'search', component: SearchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
