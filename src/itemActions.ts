import { Item } from '.';
import { MAX_QUALITY } from './constants';

const isLessThanMaxQuality = (item: Item) => {
  return item.quality < MAX_QUALITY;
}

export const decreasesItemQuality = (item: Item) => {
  return --item.quality;
}

export const increasesItemQuality = (item: Item) => {
  return (isLessThanMaxQuality(item)) ? ++item.quality : item.quality;
}

export const resetItemQualityToZero = (item: Item) => {
  item.quality -= item.quality;
  return item.quality;
}

export const decreaseSellIn = (item: Item) => {
  item.sellIn -= 1;
  return item.sellIn;
}