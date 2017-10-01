clean:
	# Cleaning workspace...
	rm -rf public/
	rm -rf node_modules/

install: clean
	# Checking requirements...
	node --version | egrep "^v6\."
	npm --version | egrep "^3\."
	# Installing npm dependencies...
	npm install
	# Installing git pre-push hook...
	cp -f pre-push .git/hooks/pre-push 2>/dev/null || true
	chmod +x .git/hooks/pre-push || true

unit:
	# Starting unit tests...
	./node_modules/.bin/mocha test/unit/**/*.test.js

pre-push: clean install unit

start:
	# Starting local server...
	./node_modules/.bin/gulp

build:
	# Building assets...
	./node_modules/.bin/gulp build

deploy: build
	# Checking requirements...
	firebase --version | egrep "^3\."
	# Copying assets...
	cd deploy/ && rm -rf public/ 2>/dev/null || true
	cd deploy/ && cp -R ../public .
	# Installing npm dependencies...
	cd deploy/functions/ && rm -rf node_modules/ 2>/dev/null || true
	cd deploy/functions/ && npm install
	# Deploying on Firebase...
	cd deploy/ && firebase deploy
