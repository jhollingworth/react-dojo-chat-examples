BIN = ./node_modules/.bin

.PHONY: bootstrap start;

start: bootstrap
	@grunt serve;

bootstrap: package.json security.json config.json
	@npm install;

security.json:
	@cp security.json.template security.json

config.json:
	@cp config.json.template config.json