import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent {
  @Input()
  imageNews: string = ''

  @Input()
  typeCard: string = ''

  @Input()
  titleCard: string = ""

  @Input()
  facePicture: string = ""

  @Input()
  authorCard: string = ''

  @Input()
  roleCard: string = ' '

  @Input()
  id:string = '0'
}
