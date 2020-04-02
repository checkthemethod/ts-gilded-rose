import GildedRose, { Item } from '../src';
import {DEXTERITY, AGED_BRIE, ELIXIR, SULFURAS, BACKSTAGE_PASS, CONJURED_ITEM } from '../src/constants'

const initializeData = () => {
  const items = [];
  items.push(new Item(DEXTERITY, 10, 20));
  items.push(new Item(AGED_BRIE, 2, 0));
  items.push(new Item(ELIXIR, 5, 7));
  items.push(new Item(SULFURAS, 0, 80));
  items.push(
    new Item(BACKSTAGE_PASS, 15, 20)
  );
  items.push(new Item(CONJURED_ITEM, 3, 6));
  return new GildedRose(items)
}

const deepClone = (data: Item[]) => {
  let cloneItems = JSON.parse(JSON.stringify(data))
  return cloneItems;
}

describe('GildedRose initialization test', () => {
  it('initializing GildedRose class cannot be null', () => {
    expect(new GildedRose()).not.toBeNull();
  });
  it('initializing GildedRose class with passed items cannot be null', () => {
    const gildedRose = initializeData()
    expect(gildedRose).not.toBeNull();
  });
});

describe('updateQuality iteration test', () => {
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

describe('Aged Brie Item updateQuality test', () => {
  it('maxes out at MAX_QUALITY of 50 after updateQuality', () => {
    const items = [new Item(AGED_BRIE, -1, 49)]
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toBe(50)
  })
});

describe('Sulfuras Item updateQuality test', () => {
  it('maintains quality of 80 after updateQuality', () => {
    const items = [new Item(SULFURAS, -1, 80)]
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toBe(80)
  })
});

describe('Conjured Item updateQuality test', () => {
  it('decreases by 2', () => {
    const items = [new Item(CONJURED_ITEM, 5, 10)]
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toBe(8)
  })
});


describe('Backstage Item updateQuality test', () => {
  it('maxes quality to MAX_LIMIT of 50 when doubling increase rate', () => {
    const items = [new Item(BACKSTAGE_PASS, 10, 49)]
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toBe(50)
  })

  it('triples increase quality rate when sellIn under 6', () => {
    const items = [new Item(BACKSTAGE_PASS, 5, 45)]
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality()
    expect(gildedRose.items[0].quality).toBe(48)
  })
})