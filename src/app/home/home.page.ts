import { Component } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public confectioneryList = [
    'popsicle',
    'ice cream',
    'apple pie',
    'candy',
    'wafer',
    'ekurea',
    'sponge cake',
    'gum',
    'cookie',
    'cracker',
    'crepe',
    'croissant',
    'cake',
    'sundae',
    'sherbet',
    'gelato',
  ]
  public filterConfectioneryList: string[]

  constructor() {
    this.initializeItems()
  }

  private initializeItems(): void {
    this.filterConfectioneryList = this.confectioneryList
  }

  public getItems(ev: any): void {
    this.initializeItems()

    const val = ev.target.value

    if (val && val.trim() !== '') {
      this.filterConfectioneryList = this.filterConfectioneryList.filter(
        (item) => item.toLowerCase().indexOf(val.toLowerCase()) > -1
      )
    }
  }
}
