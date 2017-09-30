install:
	node --version | egrep "^v6\."
	npm --version | egrep "^3\."
	rm -rf node_modules/
	npm install

test:
	exit 0

start:
	./node_modules/.bin/gulp
