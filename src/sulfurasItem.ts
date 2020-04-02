import { Item } from '.';
import { SULFURAS } from './constants';

const checkName = (item: Item) => {
  return item.name === SULFURAS;
}

const update = (item: Item ) => {
  return item;
}

export default ({ checkName, update });