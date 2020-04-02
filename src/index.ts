import { DEXTERITY, AGED_BRIE, ELIXIR, SULFURAS, BACKSTAGE_PASS, CONJURED_ITEM } from './constants';
import { decreasesItemQuality, increasesItemQuality, resetItemQualityToZero, decreaseSellIn, isItemExpired } from './itemActions';
import AgedItem from './agedItem'
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

export const isBackstageItem = (item: Item) => {
  return item.name === BACKSTAGE_PASS;
}

export const updateBackstageItem = (item: Item) => {
  increasesItemQuality(item);
  if (item.sellIn < 11) {
    increasesItemQuality(item);
  }
  if (item.sellIn < 6) {
    increasesItemQuality(item);
  }
  decreaseSellIn(item)
  if (isItemExpired(item)) {
    resetItemQualityToZero(item)
  }
}

export const updateItemQuality = (item: Item) => {

  if (AgedItem.checkName(item)) {
    AgedItem.update(item)
  } else if (isBackstageItem(item)) {
    updateBackstageItem(item)
  } else if (item.name === SULFURAS) {

  } else if (item.name === CONJURED_ITEM) {
    decreasesItemQuality(item)
    decreasesItemQuality(item)
    decreaseSellIn(item)
    if (isItemExpired(item)) {
      decreasesItemQuality(item)
      decreasesItemQuality(item)
    }

  } else {
      decreasesItemQuality(item)
      decreaseSellIn(item)
      if (isItemExpired(item)) {
        decreasesItemQuality(item)
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
    this.items.forEach(updateItemQuality)
    return this;
  }
}
