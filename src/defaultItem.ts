import { Item } from '.';
import { decreasesItemQuality, decreaseSellIn, isItemExpired } from './itemActions';

const update = (item: Item) => {
  decreasesItemQuality(item)
  decreaseSellIn(item)
  if (isItemExpired(item)) {
    decreasesItemQuality(item)
  }
}

export default ({update})