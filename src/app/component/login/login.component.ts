import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  events = [];
  opened: boolean;
  shouldRun = true;
  constructor(
    private _fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.form = this._fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    if (this.form.valid) {
      let email = this.form.get("email").value;
      let password = this.form.get("password").value;

      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
        this.router.navigate(["dashboard"]);
      });
    }
  }

  ngOnInit() {}
}
