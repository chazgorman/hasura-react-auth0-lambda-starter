# Hasura React Auth0 Lambda Starter

## Setup

```
cd common;
cp env.example .env.development.base
```

Set values for the following:
`NGROK_AUTH_TOKEN, NAME, ROOT_DOMAIN, AWS_PROFILE`


```
make setup_env && make setup_env && make setup_env # long story.. recursive vars
```

1. Create a new Auth0 Account and tenant.
2. Create a new machine to machine application in Auth0.  
3. copy the clientID and secret from the machine to machine to .env.development.base
4. rerun `make setup_env`
5. in Auth0 navigate: APIs -> Auth0 Management API -> Machine to Machine Applications -> Test Applicaiton (right arrow) -> grant all

```
make tf_setup
make tf_authzero_init
make tf_authzero_apply
```
