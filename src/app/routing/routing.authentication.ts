import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable()

export class RouteAuthentication implements CanActivate, CanActivateChild {
   
    public canActivate() {
        return confirm('Are you want to access the java Course?');
    }
    public canActivateChild() {
        return confirm('Are you want to access the java Course?');
    }

}