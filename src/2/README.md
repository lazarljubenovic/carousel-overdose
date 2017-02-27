# 2 (Getting rid of markup)

> Only necessary markup is given. Everything that can be deduced is deduced by JavaScript.

## Changes from previous version

- HTML no longer contains non-DRY markup (navigation and buttons)
- JavaScript now inserts these elements runtime

## Pros

- Semantic markup
- DRY markup

## Cons

- Unnecessary overhead for "generating" carousel

## Bottom line

Better development experience is payed by runtime. Although in this example it's nothing to worry about, in theory, we degraded user's performance to give developers some comfort.
