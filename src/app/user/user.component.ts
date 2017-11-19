import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    public route1 = '/user/glucose';
    public route2 = '/user/bloodPreasure';
    public route3 = '/user/medication';
    public route4 = '/user/report';
    public route5 = '/user/notes';
    public route6 = '/user/food_restricts';
    ngOnInit(){
    }
}
