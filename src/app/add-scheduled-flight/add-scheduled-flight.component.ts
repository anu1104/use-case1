import { Component, OnInit } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RequestFlightDetailsDTO } from '../Model/scheduled-flight';
import { ScheduledFlightService } from '../services/scheduled-flight.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {

  scheduleFlight:RequestFlightDetailsDTO=new RequestFlightDetailsDTO(0,'','','','','','','','',[],
  '','','','');
  days:string[] =['Monday','Tuesday','Wedensday','Thursday','Friday','Saturday','Sunday'];
   
    value:any;
    days_selected:any[]=[];
    selectedFile: any;
    retrievedImage: any;
    base64Data: any;
    retrieveResonse: any;
    message: any;
    imageName: any;

  //scheduleFlight:ScheduledFlight={scheduleFlightId:null, availableSeats:null, flight:null,schedule:null};

  constructor( public scheduleFlightService: ScheduledFlightService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {

    if( sessionStorage.getItem('role')!=='admin' ){
      this.router.navigate(['/login']);

    }
  }

  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.scheduleFlightService.uploadLogo(uploadImageData,this.scheduleFlight.flightName) .subscribe((response: { status: number; }) => {
      if (response.status === 200) {
        this.message = 'Image uploaded successfully';
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );
  }

  addScheduleFlight(scheduleFlight: RequestFlightDetailsDTO){
   // alert(sa+da+ ddt+ adt);
   scheduleFlight.scheduledDays=this.days_selected;
    this.scheduleFlightService.addScheduleFlight( scheduleFlight).subscribe();
    alert("Schedule Flight added");
  }

  selected_day(e:any){
    if (e.target.checked) {
        this.value = e.target.value;
        this.days_selected.push(this.value);
    }
    console.log(this.days_selected);
  }

  idValid:boolean=false;
    validateId(){
        if(this.scheduleFlight.flightNo>999){
            this.idValid=true;
        }
        else if(this.scheduleFlight.flightNo<1){
            this.idValid=true;
        }else{
            this.idValid=false;
        }
    }

  airportValid:boolean=false;
    validateAirports(a:string, b:string){
        if(a.toLowerCase()===b.toLowerCase()){
            this.airportValid=true;
        }else{
            this.airportValid=false;
        }
        this.enableButton();
  }

  buttonFlag:boolean=false;
    enableButton(){
        this.buttonFlag=!this.idValid;
    }

    add(){

      this.router.navigate(['/scheduledFlight/add']);

  }

  view(){

      this.router.navigate(['/scheduledFlight/show']);

  }

  search(){

      this.router.navigate(['/scheduledFlight/search']);

  }
}
