# Terminal Slack

A terminal interface for Slack.

![Screenshot of Termianl Slack](screen-shot.png)

## Controls
| Command | Key Combination |
| ------- | --------------- |
| Move up | `up arrow` or `k` |
| Down up | `down arrow` or `j` |
| Search | `/` |
| Exit | `esc` |
| Select channels list | `ctrl` + `c` |
| Select users list | `ctrl` + `u` |
| Select writing area | `ctrl` + `w` |
| Select message list | `ctrl` + `l` |
| SlackCat | `down` |

###### slack cat opens only when in writing area
 
## Prerequsites
 - [Node](https://nodejs.org/en/) v6.0.0 or higher
 - A [Slack](https://slack.com/) Account

## Setup
1. Download this repository:

	```
	git clone https://github.com/evanyeung/terminal-slack.git
	```

2. Enter the directory:

	```
	cd terminal-slack
	```

3. Install the package:

	```
	npm install
	```
	
4. Create your Legacy Slack API token.

	- Go to the [Slack Legacy Tokens](https://api.slack.com/custom-integrations/legacy-tokens) page
	- Click **Generate Token**

5. Install your token on your local machine, inserting your token between the quotes:

	```
	export SLACK_TOKEN='your-slack-token-here'
	```

6. Run the application: 

	```
	node main.js
	```
	
7. Terminal Slack should now launch.

## Troubleshooting
 - **Terminal Slack opens for a second but then closes again**

 	This might be due to your `SLACK_TOKEN` not being recognised. Make sure the put your `SLACK_TOKEN` between the two single quotes when exporting it:
 	
 	```
 	export SLACK_TOKEN='xoxp-254112160503-252950188691-252375361712-6cbf56aada30951a9d310a5f23d032a0'
 	```

## Download Slack CAT!

	```
	brew install slackcat 
	```

	Go to the site below
	Click `Add to slack`
	(Login if you need to)
	Go to the bottom of the page
	Click `Authorize`

	The api token is you user API token so this can be used in your .bashrc


[Slack CAT website](http://slackcat.chat/)

## Nick Mole Configs

WARNING! You have no volume control as of yet.

Most stuff is out of the box from these 2 application.

Download the terminal slack **from here** and not the other repo. 
However, you need to install **slack cat** seperately. 


download :
```
git clone git@github.com:nicholasmole/terminal-slack.git
```

Add these two things to your .bashrc
```
export SLACK_TOKEN='<%YOUR_TOKEN_HERE%';
alias tslack="cd ~<%DIRECTORY_TO_SLACK_TERMINAL%>/terminal-slack && node main.js;"
```
either get the token from [Slack Legacy Tokens](https://api.slack.com/custom-integrations/legacy-tokens)
or from slack cat.

Run your chosen alias to run the slack terminal & you should be all set! 
Use the Controls above for help
```
tslack
````


