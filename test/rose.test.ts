import GildedRose, { Item } from '../src';

/* TODO: move coverage tests to own individual tests */
const initializeData = () => {
  const items = [];
  items.push(new Item('+5 Dexterity Vest', 10, 20));
  items.push(new Item('Aged Brie', 2, 0));

  items.push(new Item('Elixir of the Mongoose', 5, 7));
  items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
  // add coverage test for SULFURAS no change in quality
  items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
  items.push(
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
  );
  // add coverage test for sellin < 11
  items.push(
    new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)
  );
  // add coverage test for sellin < 6
  items.push(
    new Item('Backstage passes to a TAFKAL80ETC concert', 5, 45)
  );
  // add coverage test for quality increase when sellIn < 0
  items.push(
    new Item('Aged Brie', -1, 49)
  );
  items.push(new Item('Conjured Mana Cake', 3, 6));
  return new GildedRose(items)
}

const deepClone = (data: Item[]) => {
  let cloneItems = JSON.parse(JSON.stringify(data))
  return cloneItems;
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

describe('updateQuality Tests', () => {
  it('updateQuality data matches snapshot after x iterations, default: 15', () => {
    const gildedRose = initializeData();
    var numIterations = 20;
    var expected = [];
    for(var i=0; i< numIterations;i++) {
      expected.push(deepClone(gildedRose.items));
      gildedRose.updateQuality();
    }
    expect(expected).toMatchSnapshot()
  })
})
