# Contributing
Hi, thanks for taking your time to take a look at how to help funkcss.

## Dependencies
- [Node](http://nodejs.org)
- [Gulp](http://gulpjs.com)
  ```
$ npm install -g gulp
```

## Setup
```
$ git clone https://github.com/filipelinhares/funkcss.git
```

- Run
```
$ npm run setup
$ npm run watch
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

## Compiling
To compile the changes you make in the `lib` directory, run:
```
$ npm run compile
```

## Linting and testing
Before pushing make sure tests aren't broken.
```
$ npm test
```

[⇠ Back to home](github.com/filipelinhares/funkcss)
