
.PHONY: up dev prod test
up:
	rm -rf node_modules .next
	yarn install
dev:
	yarn dev
prod:
	yarn build && yarn start
test:
	yarn lint