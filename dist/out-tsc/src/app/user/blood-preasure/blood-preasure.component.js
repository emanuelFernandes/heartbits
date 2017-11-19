"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BloodPreasureComponent = /** @class */ (function () {
    function BloodPreasureComponent() {
        this.MAXSIST = 140;
        this.MAXDIST = 90;
        this.EMERGENCYSIST = 180;
        this.EMERGENCYDIST = 110;
        this.MAXFC = 100;
        this.MINFC = 60;
        this.newMeasure = { date: "", dist: "", sist: "", day: "" };
        this.timeOfDay = ["Manhã", "Tarde", "Noite"];
    }
    BloodPreasureComponent.prototype.ngOnInit = function () {
        this.tableData2 = {
            headerRow: ['Data', 'Manhã', 'Tarde', 'Noite'],
            dataRows: [
                ['15/11/2017', '130/70', '135/72', '130/73'],
                ['16/11/2017', '135/74', '145/71', '140/73'],
                ['17/11/2017', '133/70', '130/76', '129/74'],
                ['18/11/2017', '183/95', '133/71', '130/95'],
                ['19/11/2017', '130/70', '145/72', '136/111'],
            ]
        };
    };
    BloodPreasureComponent.prototype.getStyle = function (cell) {
        var value = cell.split('/')[0];
        //console.log(value);
        if (value > this.EMERGENCYSIST) {
            return { color: 'red' };
        }
        if (value > this.MAXSIST) {
            return { 'font-weight': 'bold' };
        }
    };
    BloodPreasureComponent.prototype.sist = function (cell) {
        return cell.split('/')[0];
    };
    BloodPreasureComponent.prototype.getStyleDist = function (cell) {
        var value = cell.split('/')[1];
        //console.log(value);
        if (value > this.EMERGENCYDIST) {
            return { color: 'red' };
        }
        if (value > this.MAXDIST) {
            return { 'font-weight': 'bold' };
        }
    };
    BloodPreasureComponent.prototype.sistDist = function (cell) {
        return cell.split('/')[1];
    };
    BloodPreasureComponent.prototype.getStyleFC = function (cell) {
        if (cell > this.MAXFC || cell < this.MINFC) {
            return { 'font-weight': 'bold' };
        }
    };
    BloodPreasureComponent.prototype.onChange = function (value) {
        console.log(value);
    };
    BloodPreasureComponent.prototype.default = function (date) {
        return [date, '00/00', '00/00', '00/00'];
    };
    BloodPreasureComponent.prototype.timeOfDayToInd = function (t) {
        switch (t) {
            case "Manhã":
                return 1;
            case "Tarde":
                return 2;
            case "Noite":
                return 3;
        }
    };
    BloodPreasureComponent.prototype.onSubmit = function () {
        this.tableData2.dataRows.push(this.default(this.newMeasure.date));
    };
    BloodPreasureComponent = __decorate([
        core_1.Component({
            selector: 'app-blood-preasure',
            templateUrl: './blood-preasure.component.html',
            styleUrls: ['./blood-preasure.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], BloodPreasureComponent);
    return BloodPreasureComponent;
}());
exports.BloodPreasureComponent = BloodPreasureComponent;
//# sourceMappingURL=blood-preasure.component.js.map