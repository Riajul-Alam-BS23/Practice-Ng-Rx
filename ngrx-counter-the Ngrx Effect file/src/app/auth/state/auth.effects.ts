import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart } from "./auth.action";
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { AuthService } from "../../services/auth.service";
import { of } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class AuthEffects{

    constructor(private actions$: Actions
        ,private authService: AuthService
    ){}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action) => {
                return this.authService.login(action.email, action.password).pipe(
                    map(response => {
                        // Replace this with your actual action creator
                        return { type: 'LOGIN_SUCCESS', payload: response };
                    }),
                    catchError(error => {
                        // Replace this with your actual action creator
                        return of({ type: 'LOGIN_FAILURE', payload: error });
                    })
                );
            })
        );
    });
}