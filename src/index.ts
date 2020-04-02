import { DEXTERITY, AGED_BRIE, ELIXIR, SULFURAS, BACKSTAGE_PASS, CONJURED_ITEM } from './constants';

import AgedItem from './agedItem';
import BackstageItem from './backstageItem';
import ConjuredItem from './conjuredItem';
import SulfurasItem from './sulfurasItem';
import DefaultItem from './defaultItem';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const itemFactories = [AgedItem, BackstageItem, SulfurasItem, ConjuredItem];

export const updateItemQuality = (item: Item) => {
  const selectedItem = itemFactories.find((itemFactory) => itemFactory.checkName(item))
    if(selectedItem) {
      selectedItem.update(item);
    } else {
      DefaultItem.update(item);
    }
}

export default class GildedRose {
  items: Item[];

  constructor(items: Item[] = []) {
    this.items = items;
    if(this.items.length == 0) this.initializeData();
  }

  initializeData() {
    this.items.push(new Item(DEXTERITY, 10, 20));
    this.items.push(new Item(AGED_BRIE, 2, 0));
    this.items.push(new Item(ELIXIR, 5, 7));
    this.items.push(new Item(SULFURAS, 0, 80));
    this.items.push(
      new Item(BACKSTAGE_PASS, 15, 20)
    );
    this.items.push(new Item(CONJURED_ITEM, 3, 6));
  }

  updateQuality(): this {
    this.items.forEach(updateItemQuality);
    return this;
  }
}
