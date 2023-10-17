
.PHONY: up reset dev prod test
up:
	rm -rf node_modules
	yarn install
	yarn global add dotenv-cli
reset:
	rm -rf node_modules .next
	yarn install
dev:
	yarn dev
prod:
	yarn build && yarn start
test:
	yarn lint