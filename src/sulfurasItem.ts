import { Item } from '.';
import { SULFURAS } from './constants';

const checkName = (item: Item) => {
  return item.name === SULFURAS
}

export default ({ checkName })