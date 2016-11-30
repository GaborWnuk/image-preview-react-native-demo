import { describe, before, it } from 'mocha';
import { expect } from 'chai';

const Realm = require('realm');

import Article from '../../../../app/models/Article'
import Body from '../../../../app/models/Article/Body.js'
import Img from '../../../../app/models/Article/Img.js'

describe('Article model', function () {
    describe('Validate Article schema', function () {
        it('Properties and property types', function(done) {
          var properties = Article.schema.properties
          expect(properties.id.type).to.equal('string')
          expect(properties.title.type).to.equal('string')
          expect(properties.ts.type).to.equal('int')
          expect(properties.body.type).to.equal('list')
          expect(properties.body.objectType).to.equal('Body')
          done();
        })
    })

    describe('Validate Article consistency', function () {
        it('Create and write to realm', function(done) {
          const realm = new Realm({schema: [Img, Body, Article]});
          let mock = {
            id: 'zXE3EW6Sf_ciDAlstor2fQ==',
            title: 'Ukraińskie media: Moskwa grozi Kijowowi atakiem rakietowym',
            ts: 0,
            body: [{ data: "Treść" }],
            img: {"url": "http://", b64: "-"}
          }

          realm.write(() => {
            let article = realm.create('Article', mock);

            expect(article.id).to.equal(mock.id)
            expect(article.title).to.equal(mock.title)
            expect(article.ts).to.equal(mock.ts)

            expect(article.body[0].data).to.equal(mock.body[0].data)
            expect(article.img.url).to.equal(mock.img.url)
            expect(article.img.b64).to.equal(mock.img.b64)
            done()
          });
        })
    })
});
