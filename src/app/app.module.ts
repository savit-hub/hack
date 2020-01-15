import { NotfoundComponent } from './notfound/notfound.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,NgForm,NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AddcopyComponent } from './addcopy/addcopy.component';
import { CheckavailabilityComponent } from './checkavailability/checkavailability.component';
import { ListuserComponent } from './listuser/listuser.component';
import { PaymenthistoryComponent } from './paymenthistory/paymenthistory.component';
import { TakepaymentComponent } from './takepayment/takepayment.component';
import { AddmemberComponent } from './addmember/addmember.component';
import { ListissuedComponent } from './listissued/listissued.component';
import { IsssuebookComponent } from './isssuebook/isssuebook.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ReturnbookComponent } from './returnbook/returnbook.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    AddbookComponent,
    AddcopyComponent,
    CheckavailabilityComponent,
    ListuserComponent,
    PaymenthistoryComponent,
    TakepaymentComponent,
    AddmemberComponent,
    ListissuedComponent,
    IsssuebookComponent,
    ChangepwdComponent,
    EditprofileComponent,
    ReturnbookComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "",component:HomeComponent },
      { path: "home",component:HomeComponent },
      { path: "addcopy",component:AddcopyComponent },
      { path: "checkavailability",component:CheckavailabilityComponent },
      { path: "addmember",component:AddmemberComponent },
      { path: "takepayment",component:TakepaymentComponent},
      { path: "changepwd",component:ChangepwdComponent },
      { path: "addbook",component:AddbookComponent },
      { path: "paymenthistory",component:PaymenthistoryComponent },
      { path: "isssuebook",component:IsssuebookComponent },
      { path: "listissued",component:ListissuedComponent },
      { path: "returnbook",component:ReturnbookComponent },
      { path: "listuser",component:ListuserComponent},
      { path: "edit/:id",component:EditprofileComponent },
      { path: "**",component:NotfoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
