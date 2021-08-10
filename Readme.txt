Sharepoint install


	termianl command

1. yarn install

2. yarn add sp-rest-proxy concurrently -dev

	To configure proxy, Run npm run proxy.
	{
		siteurl: your sharepoint siteurl:  ex. https://koltyakov.sharepoint.com
		username:your account 
		password:your password
	}

	By default, ./config/private.json is created.

	Check if credentials are correct by navigating to http://localhost:8081 and executing any REST request, e.g. /_api/web. On success, some data should be responded from SharePoint API.
	
	You can input the endpoint as following.
	/sites/dev01/_api/web/getList
	
	Stop sp-rest-proxy, Ctrl+C in a console.
	
3.Start local development serve:

	npm run startServers
	
	Now when both servers have been started your React app can request for SharePoint API as if it were already deployed to SharePoint page, WebPack proxies local API requests to sp-rest-proxy and then requests to real SharePoint instance.
	
	open http://localhost:3000 on browser.
	
	open the inspect window of browser.
	
	You can see responded data.