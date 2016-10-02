## [v0.9.2]
:wrench: Removing gulp

We're removing gulp and using npm as a build tool.

**npm commands**
- `$ npm run setup`
- `$ npm run compile`
- `$ npm run minify`
- `$ npm run immutable`
- `$ npm run build`

_You can know more about it reading our [contributing guide](https://github.com/filipelinhares/funkcss/blob/master/CONTRIBUTING.md)._

## [v0.9.1]
:star: New features and fixes

#### Added:
- `.d-if` ⇢ `display: inline-flex`
- `.cur-p` ⇢ `cursor: pointer`
- `.op-0` ⇢ `opacity: 0`
- `.op-05` ⇢ `opacity: 0.5`
- `.op-1` ⇢ `opacity: 1`
- `.mT-a` ⇢ `margin-top: auto`
- `.mR-a` ⇢ `margin-right: auto`
- `.mB-a` ⇢ `margin-bottom: auto`
- `.mL-a` ⇢ `margin-left: auto`

#### Changed:
- `.bgs-` ⇢ `bgsz-`

## [v0.8.1]
:wrench: Hotfix

Change border helper (`.bd`) order in the file to be ovewrited by border width (`.bdw-`).

## [v0.8.0]

:package: Now you can import funkcss as a npm module with [postcss-import](https://github.com/postcss/postcss-import) and similar tools.

:wrench: New npm command for development:

```
$ npm run setup
$ npm run watch
$ npm run compile
$ npm run test
```

#### Removing `font-weight` helper
Seeing from the beggining, funkcss now is a more abstract library than it was in the past. With this release we're removing the last helper (`.fw-`) with a "*custom style*" (*custom style* is the style which changes between different projects and devs. Color and typography are a good example).

**Why are we removing font weight helper?**
- Each project has its own font family with different font weight.
- Some people prefer `font-weight` with literal values (`.fw-bold`) instead of numbers (`.fw-700`).

#### Added:
- `.bgpX-*`, `.bgpY-*` ⇢ Background position y and x
- `.d-n` ⇢ `display: none`
- `.fw-n` ⇢ `font-weight: none`
- `.fxw-wr` ⇢ `flex-wrap: wrap-reverse`
- `.fxw-nw` ⇢ `flex-wrap: nowrap`
- `.fxd-cr` ⇢ `flex-direction: column-reverse`
- `.fxd-r` ⇢ `flex-direction: row`
- `.fxd-rr` ⇢ `flex-direction: row-reverse`

#### Changed:
- Reorder border helpers
- Move `vertical-align` helpers to layout file
- `.bd-n` ⇢ `.bds-n`

#### Removed:
- `.clearfix`
- `.fw-n`
- `.fw-300`
- `.fw-600`
- `.fw-700`
- `.fw-500`

## [v0.7.0]
#### Added:
- `.maw-100` ⇢ `max-width: 100%`
- `.tov-e` ⇢  `text-overflow: ellipsis`

#### Changed:
- `.circle` ⇢ `.bdrs-50`
- `.fx-grow` ⇢ `.fxg-1`
- `.fx-shrink` ⇢ `.fxs-1`
- `.fx-none` ⇢ `.fx-n`
- `.flx-auto` ⇢ `.fxb-a`
_Flex auto now is just_ `flex-basis: auto`

#### Removed:
- Responsive state helpers
- `.reset`
- `.truncate`
- `.reset-font`
- `.reset-font-size`

## [v0.6.1]
#### Added:
- Adds default gaps to layout helpers (top, left, bottom, right)
Now you can use `.m-1` which extend to `margin-top: .5rem;`

#### Changed:
- Update stylelint rules

#### Removed:
- Removes rem fallback from cssnext
- Removes autoprefixer from cssnane (duplicated, we already have from cssnext)

## [v0.5.1]
#### Added:
- Travis CI
- funkcss-immutable

#### Changed:
- Border width prefix - `.bd` ⇢ `.bdw`
- Flex width prefix - `.flx` ⇢ `.fx`
- Order width prefix - `.order` ⇢ `.ord`
- Responsive state helpers more a11y, [see](https://github.com/filipelinhares/funkcss/commit/a46605679f59b0b3fa1c41ade0bcd429d47ae040)

#### Removed:
- Align helpers. Use flexbox instead
- Remove `.list-inline`. You can use d-ib in each list item if you want the same effect

## [v0.4.0]
#### Added:
- `float: none;` ⇢ `.fl-n`
- `align-items: baseline;` ⇢ `.ai-b`
- `align-self` [helpers](lib/flex.css#L18)
- `vertical-align` [helpers](lib/typography.css#L29)

#### Changed:
- Border radius prefix - `.radius` ⇢ `.bdrs`
- [Moving from cssnext to postcss-cssnext](http://cssnext.io/setup/#wait-what-where-is-the-previous-cssnext-interface)

**Now funk groups related helpers:**

- `backgrounds.css`, `resize.css` ⇢ `objects.css`
- `position.css` ⇢ `layout.css`
- `type.css`, `white-space.css`, `word-break.css`, `word-wrap.css` ⇢ `typography.css`

#### Removed:
- `type-scale.css`
- `letter-spacing` from `.tt-u`

## [v0.3.0]
Follow Emmet shotcurts.

#### Changed:

**Border**
- Border prefix - `.brd` ⇢ `.bd`

**Flex**
- `.fw-w` ⇢ `.fxw-w`
- `.fd-c` ⇢ `.fxd-c`

**Layout**
- `.d-t` ⇢ `.d-tb`
- `.d-tc` ⇢ `.d-tbc`
- Overflow prefix - `.ovf` ⇢ `.ov`

**Lists**
- `.ls-n` ⇢ `.lis-n`
-  List style position prefix - `.lsp` ⇢ `.lisp`
-  List style type prefix - `.ls` ⇢ `.list`

**Resize**
- `.rz-v` ⇢ `.rsz-v`
- `.rz-h` ⇢ `.rsz-h`

**White space**
- White space prefix - `.ws` ⇢ `.whs`

**Word break**
- Word break prefix - `.wb` ⇢ `.wob`

**Word wrap**
- Word wrap prefix - `.ww` ⇢ `.wow`
