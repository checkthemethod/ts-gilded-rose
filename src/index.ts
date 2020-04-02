import { DEXTERITY, AGED_BRIE, ELIXIR, SULFURAS, BACKSTAGE_PASS, CONJURED_ITEM } from './constants';

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

export const decreasesItemQuality = (item: Item) => {
  return --item.quality;
}

export const increasesItemQuality = (item: Item) => {
  return ++item.quality;
}

export const resetItemQualityToZero = (item: Item) => {
  item.quality -= item.quality;
  return item.quality;
}

export const decreaseSellIn = (item: Item) => {
  item.sellIn -= 1;
  return item.sellIn;
}

export const updateItemQuality = (item: Item) => {
  if (
    item.name != AGED_BRIE &&
    item.name != BACKSTAGE_PASS
  ) {
    if (item.quality > 0) {
      if (item.name != SULFURAS) {
        decreasesItemQuality(item)
      }
    }
  } else {
    if (item.quality < 50) {
      increasesItemQuality(item);
      if (
        item.name == BACKSTAGE_PASS
      ) {
        if (item.sellIn < 11) {
          if (item.quality < 50) {
            increasesItemQuality(item);
          }
        }
        if (item.sellIn < 6) {
          if (item.quality < 50) {
            increasesItemQuality(item);
          }
        }
      }
    }
  }
  if (item.name != SULFURAS) {
    decreaseSellIn(item)
  }
  if (item.sellIn < 0) {
    if (item.name != AGED_BRIE) {
      if (
        item.name != BACKSTAGE_PASS
      ) {
        if (item.quality > 0) {
          if (item.name != SULFURAS) {
            decreasesItemQuality(item)
          }
        }
      } else {
        resetItemQualityToZero(item)
      }
    } else {
      if (item.quality < 50) {
        increasesItemQuality(item);
      }
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
