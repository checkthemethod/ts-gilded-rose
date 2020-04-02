import GildedRose, { Item } from '../src';

const initializeData = () => {
  const items = [];
  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));
  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  items.push(
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
  );
  items.push(new Item('Conjured Mana Cake', 3, 6));
  return new GildedRose(items)
}


describe('default update test', () => {
  it('works', () => {
    expect(new GildedRose()).not.toBeNull();
  });
});

describe('update with passed items', () => {
  const gildedRose = initializeData()
  it('works', () => {
    expect(gildedRose).not.toBeNull();
  });
});
