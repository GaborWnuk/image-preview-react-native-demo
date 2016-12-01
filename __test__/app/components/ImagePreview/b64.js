import React, { Image } from 'react';

import { describe, before, it } from 'mocha';
import { expect } from 'chai';

var im = require('imagemagick');

import { B64ImagePreview } from '../../../../app/components/ImagePreview/b64'

describe('base64 to Image', function () {
    describe('Create proper Image from headless base64', function () {
        var imagePreview = new B64ImagePreview("AD8ApbT61atYA43sM88Cq2au2zHyV244z1NVLRAtWSyQKRgIPyqhKhRyh7VpgsTztxVG9x5vHXHNKMhyRV7UU9QNozTuPSr5SbjGwOpp9tLtfbgkN6etV8HPvT4nMciuD905qG7jWhpB9qnksQMkbelUJ3BmcqQwzwfWrzLGmppktyM5J71nSHdIx9SaS0G3cVXx1p9RUuTVKVibCSEGVsdMmkpG/wBY31o7VIy1cuWEMgPJjHPuOKrDk1LJ/wAe0P8AwL+dQigBc0ZpDRQB/9k=");

        it('Should be an image', function(done) {
          im.identify({data: imagePreview.base64Binary}, function (error, features) {
            expect(error).to.be.null;
            done();
          })
        })

        it('Should have proper dimensions', function(done) {
          im.identify({data: imagePreview.base64Binary}, function (error, features) {
            expect(features.width).to.equal(42);
            expect(features.width).to.equal(42);

            done();
          })
        })

        it('Should be of proper type (JPEG)', function(done) {
          im.identify({data: imagePreview.base64Binary}, function (error, features) {
            expect(features.compression).to.equal('JPEG');
            done();
          })
        })

        it('Should create proper image source (for HTML base64)', function(done) {
          let b64Prefix = 'data:image/jpg;base64'
          var imageSource = imagePreview.imageSource

          expect(imageSource).to.contain(b64Prefix);
          imageSource = imageSource.substring(b64Prefix.length + 1)

          im.identify({data: atob(imageSource)}, function (error, features) {
            expect(features.compression).to.equal('JPEG');
            done();
          })
        })
    });
});
