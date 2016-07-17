'use strict';

var firebase = require("firebase");
var axios = require('axios');
var Promise = require('bluebird');

class swapiFetcher {
  constructor() {
    this.db = null;
    this.ref = null;
    this.data = [];
    this.promises = [];
    this.swapiBaseUrl = 'http://swapi.co/api/';

    this.initFirebase();
    this.fetchData();
  }

  initFirebase() {
    firebase.initializeApp({
      databaseURL: "https://swapii-5568e.firebaseio.com/",
      serviceAccount: "./swapii-credentials.json",
      databaseAuthVariableOverride: {
        uid: 'swapiFetcher'
      }
    });

    this.db = firebase.database();
    this.ref = this.db.ref('/');
  }

  request(url, kind, resolve) {
    axios.get(url)
      .then((retVal) => {
        var res = retVal.data;

        if (kind === 'films') {
          for (var i = 0 ; i < res.results.length ; i++) {
            var id = String(res.results[i].url).split('/')[5];
            this.data[kind][id] = res.results[i].title;
          }
        } else {
          for (var i = 0 ; i < res.results.length ; i++) {
            var id = String(res.results[i].url).split('/')[5];
            this.data[kind][id] = res.results[i].name;
          }
        }

        if (res.next) {
          this.request(res.next, kind, resolve);
        } else {
          resolve();
        }
      })
      .catch(function(res) {
        console.log('catch Fetcher: ', res);
      });
  }

  fetcher(kind) {
    var promise = new Promise((resolve) => {
      var requestPromise = new Promise((requestPromiseResolve) => {
        this.request(this.swapiBaseUrl + kind, kind, requestPromiseResolve);
      })

      requestPromise
        .then(() => {
          resolve();
        });
    });

    return promise;
  }

  fetchData() {
    axios.get(this.swapiBaseUrl)
      .then((res) => {
        for (var k in res.data) {
          this.data[k] = [];
          this.promises.push(this.fetcher(k));
        }
      })
      .then(() => {
        Promise.all(this.promises).then(() => {
          this.ref.set(this.data)
            .then(() => {
              process.exit();
            });
        });
      })
      .catch(function(res) {
        console.log('Catch fetchData: ', res);
        process.exit();
      });
  }

}

new swapiFetcher();
