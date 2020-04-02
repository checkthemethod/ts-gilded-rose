import { Item } from '.';
import { BACKSTAGE_PASS } from './constants';
import { increasesItemQuality, resetItemQualityToZero, decreaseSellIn, isItemExpired } from './itemActions';

const checkName = (item: Item) => {
  return item.name === BACKSTAGE_PASS;
}

const update = (item: Item) => {
  increasesItemQuality(item);
  if (item.sellIn < 11) {
    increasesItemQuality(item);
  }
  if (item.sellIn < 6) {
    increasesItemQuality(item);
  }
  decreaseSellIn(item);
  if (isItemExpired(item)) {
    resetItemQualityToZero(item);
  }
}

export default ({ checkName, update });