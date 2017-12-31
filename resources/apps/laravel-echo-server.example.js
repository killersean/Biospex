let echo = require('/usr/lib/node_modules/laravel-echo-server/dist');

echo.run({
	"authHost": "https://biospex.org",
	"authEndpoint": "/broadcasting/auth",
	"clients": [
		{
			"appId": "",
			"key": ""
		}
	],
	"database": "redis",
	"databaseConfig": {
		"redis": {},
		"sqlite": {
			"databasePath": "/database/laravel-echo-server.sqlite"
		}
	},
	"devMode": true,
	"host": null,
	"port": "6001",
	"protocol": "https",
	"socketio": {},
	"sslCertPath": "/etc/nginx/ssl/biospex.org",
	"sslKeyPath": "/etc/nginx/ssl/biospex.org",
	"sslCertChainPath": "",
	"sslPassphrase": "",
	"apiOriginAllow": {
		"allowCors": true,
		"allowOrigin": "https://biospex.org:80",
		"allowMethods": "GET",
		"allowHeaders": "Origin, Content-Type, X-Auth-Token, X-Requested-With, Accept, Authorization, X-CSRF-TOKEN, X-Socket-Id"
	}
});