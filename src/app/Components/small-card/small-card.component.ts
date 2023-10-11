import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent {
  @Input()
  facePicture: string = ''
  @Input()
  typeCard: string = ''
  @Input()
  titleCard: string = ''
  @Input()
  authorCard: string = ''
  @Input()
  roleCard: string = ''
  @Input()
  id:string = '0'
}
