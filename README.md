# Hasura React Auth0 Lambda Starter

## Coming Soon

*Need to import from an existing project*

1. skeletons for an iOS SwiftUI app
2. gitlab ci examples

## Setup

```
cd common;
yarn run initial_make_setup
```

Set values for the following:
`NGROK_AUTH_TOKEN, NAME, ROOT_DOMAIN, AWS_PROFILE`

```
make setup_env && make setup_env && make setup_env # long story.. recursive vars
```

1. Create a new Auth0 Account and tenant. The Tenant should be named: `${NAME}-${USER}-development`
2. Create a new machine to machine application in Auth0.
3. copy the clientID and secret from the machine to machine to .env.development.base
4. rerun `yarn run generate_dotenv`
5. in Auth0 navigate: APIs -> Auth0 Management API -> Machine to Machine Applications -> Test Applicaiton (right arrow) -> grant all

```
make tf_setup
make tf_authzero_init
make tf_authzero_apply
```

In Auth0, find the client Id for your newly created application and set the `REACT_APP_AUTH0_CLIENT_ID`
variable in .env.development.base

Navigate to https://app-max-dev-project-starter.ngrok.io/
