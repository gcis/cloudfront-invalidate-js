#Simple cache invalidator for AWS cloudfront in nodejs
###CONFIGURATION
In the main folder run

	npm install

####Credentials & distribution ID
Add you credentials in the file *credentials.json* and insert your cloudfront distribution ID at the line 9 of *index.js*

###


###WARNING: hard-coding credentials is not a good practice.
####Consider using instance role or the main aws configuration file instead
You can find further documentation at https://aws.amazon.com/sdk-for-node-js/



