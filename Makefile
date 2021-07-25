lint:
	@PATH="./node_modules/.bin:$$PATH"; \
	eslint ./src

install:
	yarn install

start:
	@PATH="./node_modules/.bin:$$PATH"; \
	webpack-dev-server --config ./webpack.config.js
