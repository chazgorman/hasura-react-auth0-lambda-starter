#!/bin/bash

set -e
# set -x

source ./set-tf-vars.sh

SLS_CACHE=../backend-terraform/.cache/sls_all_${NAME}-${ENV}.txt

mkdir -p .cache;
if [ ! -e ${SLS_CACHE} ] ; then
    echo "Fetching SLS info"
    cd ../backend-lambdas;
    SLS_ALL=$(NODE_ENV=${ENV} sls info -s $ENV);
    echo "${SLS_ALL}" > ${SLS_CACHE};
    cd -;
else
    echo "Loading SLS from cache"
    OFS=$IFS
    IFS="***____**"
    SLS_ALL=$(cat "${SLS_CACHE}");
    IFS=$OFS
fi

cd ../backend-lambdas;

SLS_ALL=$(sls info -s $ENV)
export TF_VAR_hasura_lambda_endpoint=$(echo $SLS_ALL | sed -e 's/.*POST - \(https[^ ]*\/graphql\).*/\1/')
export TF_VAR_hasura_lambda_event_handler=$(echo $SLS_ALL | sed -e 's/.*POST - \(https[^ ]*\/hasura_event_handler\).*/\1/')
cd -

echo "set vars: ${ENV} ${ENV}. Lambda EP: ${TF_VAR_hasura_lambda_endpoint}"

cat terraform-templates/main.tf | \
    sed -e "s/{{var.s3_bucket}}/${TF_STATE_S3_BUCKET}/" | \
    sed -e "s/{{var.env}}/${ENV}/" | \
    sed -e "s/{{var.service}}//" | \
    sed -e "s/{{var.aws_region}}/${AWS_REGION}/" >> terraform/main.tf


cd terraform
terraform $@
cd -