#!/bin/bash

set -e
echo "Env: ${ENV} hasura domain: ${HASURA_TF_AWS_DOMAIN}"

source ./set-tf-vars.sh

echo "### DO NOT EDIT.  EDIT TEMPLATE INSTEAD###" > terraform-authzero/main.tf
cat terraform-templates/main.tf | \
    sed -e "s/{{var.s3_bucket}}/${TF_STATE_S3_BUCKET}/" | \
    sed -e "s/{{var.env}}/${ENV}/" | \
    sed -e "s/{{var.service}}/authzero-/" | \
    sed -e "s/{{var.aws_region}}/${AWS_REGION}/" >> terraform-authzero/main.tf

cd terraform-authzero
terraform $@
cd -