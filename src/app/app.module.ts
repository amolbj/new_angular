import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayDbComponent } from './two-way-db/two-way-db.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { DirectiveExpComponent } from './directive-exp/directive-exp.component';
import { NgModelDemoComponent } from './ng-model-demo/ng-model-demo.component';
import { DirectiveNgifNgifElseComponent } from './directive-ngif-ngif-else/directive-ngif-ngif-else.component';
import { DirectiveNgforComponent } from './directive-ngfor/directive-ngfor.component';
import { StateAssignmentComponent } from './state-assignment/state-assignment.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { HighlightDirective } from './highlight.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { DirectiveDemoDirective } from './directive/directive-demo.directive';
import { PasswordConfirmpassComponent } from './password-confirmpass/password-confirmpass.component';



@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    EventBindingComponent,
    TwoWayDbComponent,
    ProductComponent,
    DirectiveExpComponent,
    NgModelDemoComponent,
    DirectiveNgifNgifElseComponent,
    DirectiveNgforComponent,
    StateAssignmentComponent,
    AttributeDirectiveComponent,
    HighlightDirective,
    CustomDirectiveComponent,
    DirectiveDemoDirective,
    PasswordConfirmpassComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
