import { DEXTERITY, AGED_BRIE, ELIXIR, SULFURAS, BACKSTAGE_PASS, CONJURED_ITEM } from './constants';
import { decreasesItemQuality, increasesItemQuality, resetItemQualityToZero, decreaseSellIn } from './itemActions';

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

export const MAX_QUALITY: number = 50;
export const MIN_QUALITY: number = 0;

export const isLessThanMaxQuality = (item: Item) => {
  return item.quality < MAX_QUALITY;
}

export const isGreaterThanMinQuality = (item: Item) => {
  return item.quality > MIN_QUALITY;
}


export const updateItemQuality = (item: Item) => {
  if (
    item.name === AGED_BRIE ||
    item.name === BACKSTAGE_PASS
  ) {
    if (isLessThanMaxQuality(item)) {
      increasesItemQuality(item);
      if (
        item.name == BACKSTAGE_PASS
      ) {
        if (item.sellIn < 11) {
          if (isLessThanMaxQuality(item)) {
            increasesItemQuality(item);
          }
        }
        if (item.sellIn < 6) {
          if (isLessThanMaxQuality(item)) {
            increasesItemQuality(item);
          }
        }
      }
    }
  } else {
    if (isGreaterThanMinQuality(item)) {
      if (item.name != SULFURAS) {
        decreasesItemQuality(item)
      }
    }
  }

  if (item.name != SULFURAS) {
    decreaseSellIn(item)
  }

  if (item.sellIn < 0) {
    if (item.name === AGED_BRIE) {
      if (isLessThanMaxQuality(item)) {
        increasesItemQuality(item);
      }

    } else if (
        item.name != BACKSTAGE_PASS
      ) {
        if (isGreaterThanMinQuality(item)) {
          if (item.name != SULFURAS) {
            decreasesItemQuality(item)
          }
        }
    } else {
      resetItemQualityToZero(item)
    }
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
    for (var i = 0; i < this.items.length; i++) {
      updateItemQuality(this.items[i])
    }
    return this;
  }
}
