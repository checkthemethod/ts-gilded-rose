# The Gilded Rose

Hi and welcome to team Gilded Rose.

As you know, we are a small inn with a prime location in a prominent
city ran by a friendly innkeeper named Allison. We also buy and sell
only the finest goods. Unfortunately, our goods are constantly
degrading in quality as they approach their sell by date.

We have a system in place that updates our inventory for us. It was
developed by a no-nonsense type named Leeroy, who has moved on to new
adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items.

First an introduction to our system:

- All items have a _sellIn_ value which denotes the number of days we
  have to sell the item

- All items have a _quality_ value which denotes how valuable the
  item is

- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the _sellIn_ days is less then zero, _quality_ degrades twice
  as fast

- The _quality_ of an item is never negative

- "Aged Brie" actually increases in _quality_ the older it gets

- The _quality_ of an item is never more than 50

- "Sulfuras", being a legendary item, never has to be sold nor does
  it decrease in _quality_

- "Backstage passes", like aged brie, increases in _quality_ as it's
  _sellIn_ value decreases; _quality_ increases by 2 when there are 10
  days or less and by 3 when there are 5 days or less but _quality_
  drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires
an update to our system:

- "Conjured" items degrade in _quality_ twice as fast as normal items

Feel free to make any changes to the _updateQuality_ method and add
any new code as long as everything still works correctly. However, do
not alter the _Item_ class or _items_ property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he
doesn't believe in shared code ownership.

Just for clarification, an item can never have its _quality_ increase
above 50, however "Sulfuras" is a legendary item and as such its
_quality_ is 80 and it never alters.

## Boulevard Instructions

Consider this an exercise in refactoring a legacy system to make your
feature easier to implement, and leave things in a more maintainable
state than you found them in.

As with most legacy systems, we can't count on this one to fully
follow the spec, and we should consider the possibility that it
contains bugs that other systems compensate for and therefore depend
on. Even though this example is small, let's pretend it's a
legitimate legacy system that would be impractical to rewrite.

To complete the exercise, perform a gradual, step by step
refactoring, showing your work with micro-commits at each step.
Implement "Conjured" items when the code has improved enough to make it
easy and clear. Aside from the point at which you implement the
"Conjured" items spec, preserve all existing legacy behavior at each
step/commit.

You'll need to initialize a new git repository to start:

```
git init
git add -A
git commit -m "Initial commit"
```

And you can package up a bundle of your completed work with:

```
git bundle create your_name.bundle master
```

## Local Development

This project was bootstrapped with
[TSDX](https://github.com/jaredpalmer/tsdx).

Below is a list of commands you will probably find useful.

### `yarn start`

Runs the project in development/watch mode. Your project will be
rebuilt upon changes. TSDX has a special logger for you convenience.
Error messages are pretty printed and formatted for compatibility VS
Code's Problems tab. Your library will be rebuilt if you make edits.

### `yarn build`

Bundles the package to the `dist` folder. The package is optimized
and bundled with Rollup into multiple formats (CommonJS, UMD, and ES
Module).

### `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
