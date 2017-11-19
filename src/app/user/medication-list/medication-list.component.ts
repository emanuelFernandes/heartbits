import { Component, OnInit } from '@angular/core';

declare interface TableData {
	headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-medication',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.css']
})
export class MedicationListComponent implements OnInit {

  constructor() { }

  public tableData2: TableData;

  public route = "/user";

  public srcL = ["assets/img/faces/captopril.png", "assets/img/faces/comp5.png", "assets/img/faces/captopril.png", 'assets/img/faces/cipro.png', 'assets/img/faces/comp2.png', 'assets/img/faces/comp2.png'];


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
			headerRow: [ 'Nome', 'Princípio ativo', 'Dose'],
			dataRows: [
				[ 'António Silva', 'Captopril', '25mg (2 comprimidos)'],
				[ 'João Braga', 'Propranolol', '40mg (1 comprimido)'],
				[ 'Nelson Parente', 'Captopril', '25mg (1 comprimido)',],
				[ 'Miguel Noivo', 'Ciprofibrato', '10Kg (50 comprimidos)'],
				[ 'Joaquim Sousa', 'Metformina', '500mg (1 comprimido)'],
				[ 'Pedro Lopes', 'Metformina', '500mg (1 comprimido)']
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
