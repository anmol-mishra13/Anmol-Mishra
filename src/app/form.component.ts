import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'formm',
  template:`
  <form>
  <div class="form-group">
    <label>Email address</label>
    <input [(ngModel)]="ei" (keyUp.enter)="showei()" type="email" class="form-control" 
      />
    <small class="form-text text-muted">
    We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label>Password</label>
    <input  type="password" class="form-control" 
    placeholder="Password" />
  </div>
  <div class="form-group form-check">
    <input  type="checkbox" class="form-check-input" >
    <label class="form-check-label">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">
  Submit</button>
</form>
  
  
  `
})
export class formComponent {
    ei="Anmol";
     
    showei(){
        console.log("",this.ei);
    }

    
  
}