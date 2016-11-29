image-preview-react-native-demo
============
[![Build Status](https://travis-ci.org/GaborWnuk/image-preview-react-native-demo.svg?branch=master)](https://travis-ci.org/GaborWnuk/image-preview-react-native-demo)

Demonstration implementation of Image Preview technique - to achieve fast image previews immediately as placeholders, using around 200 bytes of image data.

Mechanism was described by [Facebook in August 2015](https://code.facebook.com/posts/991252547593574/the-technology-behind-preview-photos/).

## Installation
Demo is based on (at least)[React Native 0.38](https://facebook.github.io/react-native/) and dependencies described in `package.json` file.

Build is pretty straightforward:

```
$ npm install
$ react-native run-ios
```

or

```
$ npm install
$ react-native run-android
```

That's it!

## Preview

Preview below was prepared on 2G, high latency connection. Blurred preview is delivered immediately with article data (in GraphQL response), with 190 bytes JPG file (with 620 bytes of headers trimmed and added on clients side).

![Preview](preview.gif)
