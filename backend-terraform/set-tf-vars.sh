#!/bin/bash

set -e
# set -x

mkdir -p .cache;

echo "SETTING VARS.. region: ${AWS_REGION} . ${ENV}"
# export $(grep -v '^#' ../common/.env.${ENV} | sed -e 's/\\n/__NEWLINE__/g' | sed -e 's/=__NEWLINE__-----END CERTIFICATE-----__NEWLINE__/__END_CERT__/' | sed -e 's/ /__SPACE__/g' | xargs)

AUTH0_CACHE=../backend-terraform/.cache/auth0_cache_${NAME}-${ENV}.pem

if [ ! -e ${AUTH0_CACHE} ] ; then
    echo "Fetching Auth0 key"
    export TF_VAR_hasura_jwt_secret_key=$(curl "https://${REACT_APP_AUTH0_DOMAIN}/pem")
    echo "${TF_VAR_hasura_jwt_secret_key}" > ${AUTH0_CACHE};
else
    echo "Loading Auth0 from cache"
    OFS=$IFS
    IFS="***___**"
    export TF_VAR_hasura_jwt_secret_key=$(cat "${AUTH0_CACHE}")
    IFS=$OFS
fi


export TF_VAR_app_subdomain="${SUBDOMAIN_APP}"
export TF_VAR_app_email_domain=$APP_EMAIL_DOMAIN
export TF_VAR_app_site="${REACT_APP_BASE_URI}"
export TF_VAR_authzero_app_type=spa
export TF_VAR_authzero_description=$TF_AUTH0_DESCRIPTION
export TF_VAR_authzero_domain=$REACT_APP_AUTH0_DOMAIN
export TF_VAR_authzero_mgmt_client_id=$TF_AUTH0_API_CLIENT_ID
export TF_VAR_authzero_mgmt_client_secret=$TF_AUTH0_API_CLIENT_SECRET
export TF_VAR_aws_region=$AWS_REGION
export TF_VAR_az=${AWS_REGION}a ## The }a is important.. not a typo
export TF_VAR_env=$ENV
export TF_VAR_hasura_access_key=$HASURA_GRAPHQL_ADMIN_SECRET
export TF_VAR_hasura_db_name="hasura_rds_${ENV}"
export TF_VAR_hasura_db_name="hasura_rds_${ENV}_${NAME}"
export TF_VAR_hasura_db_password=$HASURA_TF_DB_PASSWORD
export TF_VAR_hasura_db_username=$HASURA_TF_DB_USERNAME
export TF_VAR_hasura_domain=$HASURA_TF_AWS_DOMAIN
export TF_VAR_hasura_endpoint=$REACT_APP_HASURA_ENDPOINT
export TF_VAR_hasura_graphql_admin_secret=$HASURA_GRAPHQL_ADMIN_SECRET
export TF_VAR_hasura_image=$HASURA_IMAGE
export TF_VAR_lambda_version=$LAMBDA_VERSION
export TF_VAR_name=$NAME
export TF_VAR_root_domain=$ROOT_DOMAIN
export TF_VAR_root_reverse_domain="${ROOT_REVERSE_DOMAIN}"
export TF_VAR_s3_bucket=$TF_STATE_S3_BUCKET
export TF_VAR_service_name=$SERVICE_NAME
export TF_VAR_static_site="https://www.${REACT_APP_DOMAIN}"
export TF_VAR_static_site="https://www.example.com"
export TF_VAR_subdomain_hasura=${SUBDOMAIN_HASURA}