import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {

  constructor() { }

  public tableData2: TableData;

   MAXSIST = 140;
   MAXDIST = 90;
   EMERGENCYSIST = 180;
   EMERGENCYDIST = 110;
   MAXFC = 100;
   MINFC = 60;

   newMeasure={date:null, dist:null, sist:null, day:null};

   timeOfDay = ["Manhã", "Tarde", "Noite" ];

  ngOnInit() {

  	this.tableData2 = {
            headerRow: [ 'Data', 'Manhã',  'Tarde', 'Noite' ],
            dataRows: [
                ['2017/11/14', '130/70','135/72', '130/73'],
                ['2017/11/15', '135/74','145/71', '140/73'],
                ['2017/11/16', '133/70','130/76', '129/74'],
                ['2017/11/17', '183/95','133/71', '130/95' ],
                ['2017/11/18', '130/70','145/72', '136/111'],
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

  getStyleFC(cell){
  	if(cell > this.MAXFC || cell < this.MINFC){
  		return {'font-weight':'bold'};
  	}
  }

	onChange(value) {
	console.log(value);
	}
   
   default(date){
   	//date="";
   	var exp = new RegExp("-", "g");

   date = date.replace(exp,'/');
   		
   	return [date, '00/00', '00/00', '00/00'];
   }

   timeOfDayToInd(t){
   	switch (t) {
   		case "Manhã":
   			return 1;
   			
   		case "Tarde" :

   		return 2;

   		case "Noite" :

   		return 3;
   	}
   }

   onSubmit(){
   	var flag=false;
   	var ind= 0;
   	var exp = new RegExp("-", "g")
   	for (var d of this.tableData2.dataRows){
   		console.log(d[0],this.newMeasure.date.replace(exp,'/'));
   		if(d[0] == this.newMeasure.date.replace(exp,'/')){
   			flag=true;
   			break;
   		}
   		ind++;
   	}
   	if(!flag){
   	this.tableData2.dataRows.push(this.default(this.newMeasure.date));
   }
   this.tableData2.dataRows[ind][this.timeOfDayToInd(this.newMeasure.day)] = this.newMeasure.sist+'/'+this.newMeasure.dist;
   }

}
