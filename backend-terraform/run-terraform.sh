#!/bin/bash

set -e
# set -x

echo "run-terraform has some out of date stuff that may not work.."
exit 6

export ENV=production

cd ../speedycal-lambdas;

SLS_ALL=$(sls info -s $ENV)
export TF_VAR_hasura_lambda_endpoint=$(echo $SLS_ALL | sed -e 's/.*POST - \(https[^ ]*\/graphql\).*/\1/')
export TF_VAR_hasura_lambda_event_handler=$(echo $SLS_ALL | sed -e 's/.*POST - \(https[^ ]*\/hasura_event_handler\).*/\1/')
cd -

export $(grep -v '^#' ../common/.env.${ENV} | sed -e 's/\\n/__NEWLINE__/g' | sed -e 's/=__NEWLINE__-----END CERTIFICATE-----__NEWLINE__/__END_CERT__/' | sed -e 's/ /__SPACE__/g' | xargs)

echo "Env: ${ENV} hasura domain: ${HASURA_TF_AWS_DOMAIN}"

# export HASURA_GRAPHQL_JWT_KEY_RAW=$(echo $HASURA_GRAPHQL_JWT_KEY_RAW | sed -e 's/__END_CERT__/=__NEWLINE__-----END CERTIFICATE-----__NEWLINE__/'  | sed -e s'/__SPACE__/ /g'| sed -e s'/__NEWLINE__/\\n/g')

export TF_VAR_s3_bucket=$TF_STATE_S3_BUCKET
export TF_VAR_app_name=$APP_NAME
export TF_VAR_aws_region=$AWS_REGION
export TF_VAR_az=${AWS_REGION}a
export TF_VAR_lambda_version=$LAMBDA_VERSION
export TF_VAR_env=$ENV
export TF_VAR_domain=$HASURA_TF_AWS_DOMAIN
export TF_VAR_service_name=$SERVICE_NAME
export TF_VAR_hasura_db_username=$HASURA_TF_DB_USERNAME
export TF_VAR_hasura_db_name="hasura_rds_${ENV}"
export TF_VAR_hasura_db_password=$HASURA_TF_DB_PASSWORD
export TF_VAR_hasura_access_key=$HASURA_GRAPHQL_ADMIN_SECRET
export TF_VAR_hasura_image=$HASURA_IMAGE
export TF_VAR_hasura_endpoint=$REACT_APP_HASURA_ENDPOINT
export TF_VAR_static_site="https://www.${REACT_APP_DOMAIN}"
export TF_VAR_app_site="${REACT_APP_BASE_URI}"
export TF_VAR_app_domain="${REACT_APP_DOMAIN}"

export TF_VAR_authzero_domain=$REACT_APP_AUTH0_DOMAIN
# export TF_VAR_authzero_client_id=$REACT_APP_AUTH0_CLIENT_ID
# export TF_VAR_authzero_client_secret=$TF_AUTHZERO_CLIENT_SECRET
export TF_VAR_authzero_mgmt_client_id=$TF_AUTH0_API_CLIENT_ID
export TF_VAR_authzero_mgmt_client_secret=$TF_AUTH0_API_CLIENT_SECRET

# expose a tunneled endpooint so we don't have to go through it for local dev
# export TF_VAR_hasura_lambda_endpoint=$LAMBDA_ENDPOINT
# export TF_VAR_hasura_lambda_event_handler=$LAMBDA_HASURA_EVENT_HANDLER
# export TF_VAR_hasura_jwt_secret='{\"type\": \"RS512\", \"key\": \"-----BEGIN CERTIFICATE-----\nMIIC+zCCAeOgAwIBAgIJB4zTTsUujLqnMA0GCSqGSIb3DQEBCwUAMBsxGTAXBgNV\nBAMTEGthcmFkYS5hdXRoMC5jb20wHhcNMTgxMTE0MDI0NjExWhcNMzIwNzIzMDI0\nNjExWjAbMRkwFwYDVQQDExBrYXJhZGEuYXV0aDAuY29tMIIBIjANBgkqhkiG9w0B\nAQEFAAOCAQ8AMIIBCgKCAQEAwp/ToZlgksYKLiGEuH+F/x4esgoGfJzk67h9Z2BH\n7F+Ji3Sg6WRRX51kJ8AHwra1XCLuqybVc9/70FOMdAHjbuZJ8ympjyiCIsiHMXVC\n3c9M1E+HBuGLyQFD7XQQDEns4suL4rJh7mzem9w0x/nXSj2iWiTwRtymgVnhDdsN\ndM8Z5gJ/wiT752Yd4PExrTSONNEyE7K/vE/XGV1bLeFh5/P/bWxkeQCNbkWy/QSk\nHnuJ4nsAjzEvf12vre2tpntd17s4Bc6GS8Qd4a07AFi2Kb1fRv3LHiBv0YX0mwFv\nHKy5n8b4uTmHVYEz+yfd/O+wtrjVrNLpayrvnjZk3FcrEwIDAQABo0IwQDAPBgNV\nHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTihf+aJDdKAjluMQPHAWqEVFZ2GzAOBgNV\nHQ8BAf8EBAMCAoQwDQYJKoZIhvcNAQELBQADggEBAHcCiJdMh1PxBXD2ZO/IlgIG\n9CkFHJ6zx4tWu6i/rBwPiQzr7hhrxcUZx0HxrWz4JfC5brsCKpiGgDW9Ac5dK5jY\n7X2GNrUJq5mq9tG/A7IRUy5J0pRHwgt1ZHt+vSn8AdJ6J9hYd22GIow7DrnkkLRn\n+j0xGfyYJy3snGQUVSoaVhuk7rCnezgV08ICI+75cWT+EojRZjmt7uIPHUZNOgYP\n3mTE4OhtERwGCOR56gvLqhmdss53B/jqTlrxKkijo0CUNCm5k8R9wFaKo5cx5uD6\ncgzfHsbJ0/hoFiFuHj7yEjfJbeNB+wLQypXIrRIexawwFXIb7nmo1ux0a18gQAA=\n-----END CERTIFICATE-----\n\"}'
# export TF_VAR_hasura_jwt_secret_key=$HASURA_GRAPHQL_JWT_KEY_RAW
export TF_VAR_hasura_jwt_secret_key=$(curl "https://${REACT_APP_AUTH0_DOMAIN}/pem")
export TF_VAR_hasura_graphql_admin_secret=$HASURA_GRAPHQL_ADMIN_SECRET

echo "### DO NOT EDIT.  EDIT TEMPLATE INSTEAD###" > terraform/main.tf
cat terraform-templates/main.tf | \
    sed -e "s/\${var.s3_bucket}/$TF_STATE_S3_BUCKET/" | \
    sed -e "s/\${var.env}/$ENV/" | \
    sed -e "s/\${var.aws_region}/$AWS_REGION/" >> terraform/main.tf

cd terraform
terraform $@
cd -