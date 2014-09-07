BIN = ./node_modules/.bin

.PHONY: bootstrap start;

start: bootstrap
	@grunt serve;

bootstrap: package.json security.json
	@npm install;

security.json:
	@cp security.json.template security.json