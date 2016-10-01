# Contributing
Hi, thanks for taking your time to take a look at how to help funkcss.

## Dependencies
- [Node](http://nodejs.org)

## Setup
```
$ git clone https://github.com/filipelinhares/funkcss.git
$ cd funkcss
$ npm run setup
```

## File structure
All funkcss source code is found in the `lib` directory.

The files are separeted by group:
```
└── lib
  ├── border.css
  ├── default-gaps.css
  ├── flex.css
  ├── index.css
  ├── layout.css
  ├── lists.css
  ├── objects.css
  ├── sizes.css
  ├── spacing.css
  └── typography.css
```

 The `dist` directory contain the minified version compiled with [gulp](http://gulpjs.com).

```
└── dist
  ├── funkcss-immutable.min.css
  └── funkcss.min.css
```
### Other npm commands

**Compile**
```
$ npm run compile
```
Use [postcss modules](https://github.com/filipelinhares/funkcss/blob/master/package.json#L31-L39) to generate the `dist/funkcss.css` file.


**Minify**
```
$ npm run minify
```
Generates `dist/funkcss.min.css` from `dist/funkcss.css`.

**Immutable**
```
$ npm run immutable
```
Generates `dist/funkcss-immutable.min.css` from `dist/funkcss.min.css`.

**Build**
```
$ npm run build
```
This commands is an alias to _compile_, _minify_ and _immutable_ commands.

[⇠ Back to home](https://github.com/filipelinhares/funkcss)
