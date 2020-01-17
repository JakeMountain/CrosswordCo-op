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

  //hey, make this whole thing into one string array "document" where the user writes text behind the scenes.
  //then each new letter in the document triggers a 'jump' to the next index in the array. if tab is pressed,
  //have to jump to next 'word' in the string? shit, how does that work? idk problem for another time
  //enter or tab jumps to next word, shift+enter/tab jump back? tie each index in array to two clues
  //have to constantly 'listen' for user input, and update grid on when user enters
}
