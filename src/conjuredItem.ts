import { Item } from '.';
import { CONJURED_ITEM } from './constants';
import { decreasesItemQuality, decreaseSellIn, isItemExpired } from './itemActions';

const checkName = (item: Item) => {
  return item.name === CONJURED_ITEM;
}
const update = (item: Item) => {
  decreasesItemQuality(item);
  decreasesItemQuality(item);
  decreaseSellIn(item);
  if (isItemExpired(item)) {
    decreasesItemQuality(item);
    decreasesItemQuality(item);
  }
}

export default ({ checkName, update });

