var AWS = require('aws-sdk');
var randomstring = require('randomstring');

AWS.config.loadFromPath('credentials.json');

var reference = randomstring.generate(16); 
var cloudfront = new AWS.CloudFront();
var params = {
  DistributionId: 'YOUR_DISRTRIBUTION_ID', /* required */
  InvalidationBatch: { /* required */
    CallerReference: reference, /* required */
    Paths: { /* required */
      Quantity: 1, /* required */
      Items: [
        '/',
        /* more items */
      ]
    }
  }
};
cloudfront.createInvalidation(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});