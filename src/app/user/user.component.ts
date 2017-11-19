import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    public route1 = '/user/glucose';
    public route2 = '/user/bloodPreasure';
    ngOnInit(){
    }
}
