/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var Twit = require('twit');

module.exports = {
	tweet: function(req, ers){

		var T = new Twit({
			consumer_key:         config.TWITTER_KEY,
			consumer_secret:      config.TWITTER_SECRET,
			access_token:         '83807038-wr1d1CV8rHUGM931bCCKEodIfh1arQAfdrZSPbEtj',
			access_token_secret:  'Yp6nPlZwG0Sz2JVShkOqGy57N2K0aGiyqX1WwphRaaUoQ'
		});

			T.post('statuses/update', { status: 'hello world!!!' }, function(err, data, response) {
			console.log(data, err);
		});
	}
};
