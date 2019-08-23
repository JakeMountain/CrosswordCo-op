import { Component, OnInit } from '@angular/core';
import { XwordFetchService } from 'src/app/services/xword-fetch.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  value: Date;
  result: any;

  constructor(private xwordService: XwordFetchService) { }

  ngOnInit() {
  }

  handleClick() {
    console.log("clickity clack");
    const req = this.xwordService.getXword('current');
    req.subscribe((data : any) => {
      console.log(data);
      this.result = data;
    });

  }
  counter(){
    return new Array(this.result['size']['rows']);
  }


  
}
