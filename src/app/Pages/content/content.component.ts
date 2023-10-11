import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { news } from '../../Components/data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @Input()
  contentPhotoCover: string = 'https://th.bing.com/th/id/OIP.C27Q7GlkEKlLO9ZLgPhL2wHaEK?w=314&h=180&c=7&r=0&o=5&pid=1.7'

  @Input()
  contentTitle: string = 'Notícias de última hora'

  @Input()
  contentDescription: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repudiandae nihil dolorem, placeat quam laboriosam suscipit minus sit possimus laudantium atque ex, inventore commodi ullam saepe illum pariatur! Facere, voluptatem! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui ea quis laboriosam sit porro, magnam dolore vel. Labore dolore itaque, dicta ratione veniam nihil, harum ullam nemo tempore praesentium ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et rem odit ut, aliquam similique cum nemo mollitia  perspiciatis exercitationem sint, aspernatur delectus quas voluptas voluptates quis alias aliquid non.'

  private id: string | null = "0";

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => {
      this.id = value.get("id")
      this.setValueToComponent(this.id)
    })

  }

  setValueToComponent(id: string | null) {
    if (id !== null) {
      const result = news.filter(item => item.id === id)[0];

      this.contentPhotoCover = result['photo-url']
      this.contentTitle = result.title
    }
  }


}
