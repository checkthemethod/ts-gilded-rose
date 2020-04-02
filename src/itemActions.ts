import { Item } from '.';

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