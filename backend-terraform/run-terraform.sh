#!/bin/bash

set -e
# set -x

source ./set-tf-vars.sh

cd ../backend-lambdas;

SLS_ALL=$(sls info -s $ENV)
export TF_VAR_hasura_lambda_endpoint=$(echo $SLS_ALL | sed -e 's/.*POST - \(https[^ ]*\/graphql\).*/\1/')
export TF_VAR_hasura_lambda_event_handler=$(echo $SLS_ALL | sed -e 's/.*POST - \(https[^ ]*\/hasura_event_handler\).*/\1/')
cd -

cat terraform-templates/main.tf | \
    sed -e "s/{{var.s3_bucket}}/${TF_STATE_S3_BUCKET}/" | \
    sed -e "s/{{var.env}}/${ENV}/" | \
    sed -e "s/{{var.service}}//" | \
    sed -e "s/{{var.aws_region}}/${AWS_REGION}/" >> terraform/main.tf


cd terraform
terraform $@
cd -