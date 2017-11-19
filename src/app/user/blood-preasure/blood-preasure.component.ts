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

   MAXSIST = 140;
   MAXDIST = 90;
   EMERGENCYSIST = 180;
   EMERGENCYDIST = 110;

  ngOnInit() {

  	this.tableData2 = {
            headerRow: [ 'Data', 'Manhã',  'Tarde', 'Noite', 'FC' ],
            dataRows: [
                ['15/11/2017', '130/70','135/72', '130/73', '70' ],
                ['16/11/2017', '135/74','145/71', '140/73', '74'],
                ['17/11/2017', '133/70','130/76', '129/74', '72' ],
                ['18/11/2017', '183/95','133/71', '130/95', '68' ],
                ['19/11/2017', '130/70','145/72', '136/111', '70'],
            ]
        };

  }


  getStyle(cell){
  	const value = cell.split('/')[0];

  	//console.log(value);

  	if(value > this.EMERGENCYSIST){
  		return {color:'red'};
  	}

  	if(value > this.MAXSIST)
  	{
  		return {'font-weight':'bold'};
  	}	
  }

  sist(cell){
  	return cell.split('/')[0];
  }



  getStyleDist(cell){
  	const value = cell.split('/')[1];

  	//console.log(value);

  	if(value > this.EMERGENCYDIST){
  		return {color:'red'};
  	}

  	if(value > this.MAXDIST)
  	{
  		return {'font-weight':'bold'};
  	}	
  }

  sistDist(cell){
  	return cell.split('/')[1];
  }
   

}
