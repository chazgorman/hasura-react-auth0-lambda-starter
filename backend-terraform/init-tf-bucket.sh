#!/bin/bash

set -e
# set -x
# export $(grep -v '^#' .env | xargs)
# export $(grep AWS .env | xargs)
# export $(grep -v '^#' .env | sed -e 's/TF_VAR_//' | xargs)


# export SLUG="slug"
# export LAMBDA_SLUG="${DEPLOY_DIR}/${SLUG}.zip"
# export S3_SLUG_URL="s3://${S3_BUCKET}/${LAMBDA_VERSION}/${SLUG}.zip"
# mkdir -p "${DEPLOY_DIR}"

# # aws s3api create-bucket --profile karada-deploy --acl private --region $AWS_REGION --bucket $S3_BUCKET
# if [[ ($(aws s3api --profile ${AWS_PROFILE} list-buckets ) =~ $S3_BUCKET) ]]; then
#     echo "S3 Bucket exists.. skipping";
# else
#     echo "Creating bucket $S3_BUCKET"
#     aws s3 mb --profile ${AWS_PROFILE}  --region $AWS_REGION s3://$S3_BUCKET
# fi

HARDCODED_TF_STATE_BUCKET=${TF_STATE_S3_BUCKET}
# aws s3api create-bucket --profile karada-deploy --acl private --region $AWS_REGION --bucket $S3_BUCKET
if [[ ($(aws s3api --profile ${AWS_PROFILE} list-buckets ) =~ $HARDCODED_TF_STATE_BUCKET) ]]; then
    echo "tfstate bucket exists.. skipping"
else
    echo "Creating tf state bucket"
    aws s3 mb --profile ${AWS_PROFILE}  --region $AWS_REGION s3://$HARDCODED_TF_STATE_BUCKET
fi


# mkdir -p lambda/dist
# cd lambda
# yarn && webpack
# # tsc # src/handler.ts
# cd -
# zip -j "${LAMBDA_SLUG}" lambda/dist/handler.map lambda/dist/handler.js
# aws s3  --profile ${AWS_PROFILE} cp "${LAMBDA_SLUG}" "${S3_SLUG_URL}"
