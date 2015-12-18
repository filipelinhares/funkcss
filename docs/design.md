# Design principles

## Table of content

#### Functional
Small, clear, easy to read classes that are easy to apply and do one thing. You might have called them ‘utility classes’ with some snark, but they rock. A random example from Basscss would be the margin & padding classes - `mb1`, `px2` (margin-bottom-1, padding-x-2) etc. The super short naming conventions are optional (I just love Brent’s implementation) — I guess you could write a library with less terse class names if you’re a masochist, but FP seems to tend toward short variable names. When you consolidate all of your sizing & spacing into reusable classes you force a beautiful type scale & rhythm on your design. Neat!

#### Composable
In FP it’s fun to compose a bunch of small functions together to create larger actions. The parallel in f(css) is building up big ol’ chains of tiny classes. Think declarative composition — `<a class="mb2 bg-green white px2 rounded">` rather than OO-derived objects & modifiers — `<a class="btn btn--primary">`. Scared of writing lots of classes? No shit, everyone hates typing. Wrap them up in React components to your heart’s content. classnames is a fun module for dynamically composing groups of classes, so you don’t end up with massive strings all over the shop. ***The point isn’t to get away from component-based design*** (which rocks and should be a cornerstone of your design ethos); rather you should get away from component-based CSS, which is crappy and repetitive.

#### Immutable
On to the fun stuff. Declare a property once and you should be damn sure it’s never going to get overwritten. Fuck specificity. Apply the class you want — margin-bottom, say — and rest assured that no one else’s CSS is going to override it. The problem here is that CSS isn’t immutable (has anyone made an actually-immutable CSS preprocessor? If not I’m going to write one), but be clever in your implementation and it’s kind of like immutability.

#### Referentially transparent
This is a fancy way of saying ‘it should be guaranteed to do the thing you want it to do’. The cascade and ems are two of the worst things about CSS. I’m tired of playing guesswork because some framework author decided that using multipliers was a good idea.

#### Side-effectfree
Not only should a class do the same thing every time, but it should never, ever change anything other than what you’re targeting.

[Source](http://www.jon.gold/2015/07/functional-css/)
