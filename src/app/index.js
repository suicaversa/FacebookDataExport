//var graph = require('fbgraph');

exports.handler = (event, context, callback) => {
    /* if(event.access_token != null){
      graph.setAccessToken(event.access_token);
    }

    graph.get("me", function(err, res) {
      console.log(res); // { id: '4', name: 'Mark Zuckerberg'... }
      callback(null, {
        "statusCode": "200",
        "body": res
      });
    }); */

  callback(null, {
    "statusCode": "200",
    "body": '{result: "Hello, World!"}'
  });
};
