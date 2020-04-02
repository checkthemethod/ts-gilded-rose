import { Item } from '.';
import { MAX_QUALITY, MIN_QUALITY } from './constants';


export const isItemExpired = (item: Item) => {
  return item.sellIn < 0;
}

export const isGreaterThanMinQuality = (item: Item) => {
  return item.quality > MIN_QUALITY;
}

const isLessThanMaxQuality = (item: Item) => {
  return item.quality < MAX_QUALITY;
}

export const decreasesItemQuality = (item: Item) => {
  return (isGreaterThanMinQuality(item)) ? --item.quality : item.quality;
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