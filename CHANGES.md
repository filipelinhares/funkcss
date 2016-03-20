## [v2.0.1]
> March 9, 2016

- **Emmet selectors:** For easier maintanance and sanity of people learning this library, now, all the possible emmeter selectors that can become a class are being generated automatically from a script. This means some classes will change in order to normalize them with the ones at [emmet abbreviations list](http://docs.emmet.io/cheat-sheet/).

The breaking changes are mostly with the following classes:
```css
/*
  Syntax: `.prev-class -> .new-class`
*/
/* border */
.brd-dt -> .bds-dt
.brd-ds -> .bds-ds
.brd-db -> .bds-db
.brd-s -> .bds-s
.brd-g -> .bds-g
.brd-r -> .bds-r
.brd-i -> .bds-i
.brd-o -> .bds-o

/* flex */
.flx-w -> .fxw-w
.flx-c -> .fxd-c
.jc-s -> .jc-fs
.jc-e -> .jc-fe

/* layout */
.d-t -> .d-tb
.d-tc -> .d-tbc
.ovf-h -> .ov-h
.ovf-a -> .ov-a
.ovf-s -> .ov-s
.ovfY-h -> .ovy-h
.ovfX-h -> .ovx-h
.ovfY-a -> .ovy-a
.ovfX-a -> .ovx-a
.ovfY-s -> .ovy-s
.ovfX-s -> .ovx-s

/* lists */
.ls-n -> .lis-n
.ls-c -> .lisp-c
.ls-s -> .lisp-s
.ls-u -> .lisp-u
.ls-l -> .lisp-l
.lsp-i -> .lisp-i
.lsp-o -> .lisp-o

/* resize */
.rz-v -> .rsz-v
.rz-h -> .rsz-h

/* white-space */
.ws-nw -> .whs-nw
.ws-p -> .whs-p
.ws-n -> .whs-n

/* word-break */
.wb-n -> .wob-n
.wb-b -> .wob-k
.wb-k -> .wob-ba

/* word-wrap */
.ww-bw -> .wow-b
.ww-n -> .wow-nm
```
