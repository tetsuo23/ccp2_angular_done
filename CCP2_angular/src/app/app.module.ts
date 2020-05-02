import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccueilComponent } from './accueil/accueil.component';
import { CardComponent } from './card/card.component';
import { RecrutementComponent } from './recrutement/recrutement.component';
import { ContactComponent } from './contact/contact.component';
import { ProjetComponent } from './projet/projet.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
import { MemberComponent } from './member/member.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './_services/user.service';
import { MemberAddComponent } from './member-add/member-add.component';
import { ContactAddComponent } from './contact-add/contact-add.component';
import { ConnexionComponent } from './connexion/connexion.component'

import { ContactService } from './contact.service';
import { PrestationsComponent } from './prestations/prestations.component';
import { GoogleComponent } from './google/google.component';
import { ConnexionService } from './connexion.service';
import { FormsModule } from '@angular/forms';
// --------------block authentification----------------------

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';


//--------------------------------------------------------
import { PostService } from "./_services/post.service";
import { PostShowComponent } from './post-show/post-show.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { AdminPostComponent } from './admin-post/admin-post.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CardComponent,
    RecrutementComponent,
    ContactComponent,
    ProjetComponent,
    WorkInProgressComponent,
    MemberComponent,
    MemberAddComponent,
    ContactAddComponent,
    PrestationsComponent,
    GoogleComponent,
    ConnexionComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    PostShowComponent,
    PostEditComponent,
    PostCreateComponent,
    AdminPostComponent,
    FooterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService, ContactService, ConnexionService, PostService, authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


