import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-blood-preasure',
  templateUrl: './blood-preasure.component.html',
  styleUrls: ['./blood-preasure.component.css']
})
export class BloodPreasureComponent implements OnInit {

  constructor() { }

  public tableData2: TableData;

  ngOnInit() {

  	this.tableData2 = {
            headerRow: [ 'Data', 'Manhã',  'Tarde', 'Noite', 'FC' ],
            dataRows: [
                ['15/11/2017', '130/70','135/72', '130/73', '70' ],
                ['16/11/2017', '135/74','137/71', '140/73', '74'],
                ['17/11/2017', '133/70','130/76', '129/74', '72' ],
                ['18/11/2017', '140/72','133/71', '130/73', '68' ],
                ['19/11/2017', '130/70','135/72', '136/73', '70'],
            ]
        };

  }

   

}
