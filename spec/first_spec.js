var frisby = require('frisby');
frisby.create('GET 東京都の番組データ')
  .get('http://animemap.net/api/table/tokyo.json')
  .expectJSON({
    response: {
      item:[
        {
          title: 'アオハライド'
        }
      ]
    }
  })
  .toss();
