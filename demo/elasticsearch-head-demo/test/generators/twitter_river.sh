curl -XDELETE 'http://192.168.11.173:9200/twitter_river'
echo
curl -XDELETE 'http://192.168.11.173:9200/_river/twitter_river'
echo
curl -XPUT 'http://192.168.11.173:9200/twitter_river'
echo
read -p "consumer key: " consumer_key
read -p "consumer secret: " consumer_secret
read -p "access token: " access_token
read -p "access token secret: " access_token_secret
curl -XPUT '192.168.11.173:9200/_river/twitter_river/_meta' -d '
{
	"type" : "twitter",
	"twitter" : {
		"oauth": {
			"consumer_key": "'${consumer_key}'",
			"consumer_secret": "'${consumer_secret}'",
			"access_token": "'${access_token}'",
			"access_token_secret": "'${access_token_secret}'"
		}
	},
	"index": {
		"index": "twitter_river",
		"type": "status",
		"buk_size": 100
	}
}'
echo