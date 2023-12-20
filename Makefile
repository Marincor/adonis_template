SHELL=/bin/bash
.DEFAULT_GOAL=setup
CURRENTDIR=$(shell dirname `pwd`)

ifneq (,$(wildcard ./.env))
include .env
export
endif


setup:
  npm i

run: .env node_modules
	@echo "## Starting API... ##"
	node ace serve --watch

generate_key:
	test -f private.pem || openssl genpkey -out private.pem -algorithm RSA -pkeyopt rsa_keygen_bits:4096

generate_public:
	test -f private.pem && openssl pkey -in private.pem -pubout -out public.pem
