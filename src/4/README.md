# 4 (Getting rid of JavaScript)

> Using pseudo-selectors and with help of SASS to automate some loops, we can completely remove JavaScript.

(We still use Jade to automate boilerplate markup.)

## Changes from previous version

Get rid of JavaScript. Change markup to make CSS-only possible.

## Pros

- Semantic markup
- DRY markup
- No unnecessary overhead for "generating" carousel
- Works without JavaScript

## Cons

- Another build pipe-line (Jade)
- Might not be trivial to change, and depending on actual requirements might not always be possible.

## Bottom line

Probably not necessary to go this far in production, but it was a fun exercise with CSS selectors :smile:
