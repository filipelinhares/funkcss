## [v0.7.0]
#### Added:

- `maw-100` ⇢ `max-width: 100%`
- `.tov-e` ⇢  `text-overflow: ellipsis`
- Responsive state helpers

#### Changed:
- `.circle` ⇢ `.bdrs-50`
- `.fx-grow` ⇢ `.fxg-1`
- `.fx-shrink` ⇢ `.fxs-1`
- `.fx-none` ⇢ `.fx-n`
- `.flx-auto` ⇢ `.fxb-a`
_Flex auto now is just_ `flex-basis: auto`

#### Removed:
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
