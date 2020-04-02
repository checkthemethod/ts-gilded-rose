import {Item} from '.';
import {  AGED_BRIE } from './constants';
import { increasesItemQuality, decreaseSellIn, isItemExpired } from './itemActions';

const checkName = (item: Item) => {
  return item.name === AGED_BRIE;
}
const update = (item: Item) => {
  increasesItemQuality(item);
  decreaseSellIn(item);
  if (isItemExpired(item)) {
    increasesItemQuality(item);
  }
}

export default ({checkName, update});