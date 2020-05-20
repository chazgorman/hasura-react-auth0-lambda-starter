module "hasura" {
  #   source  = "Rayraegah/hasura/aws"
  source = "git::https://github.com/maxcan/terraform-aws-hasura?ref=max/02/variables-for-multiple-deploys"

  #   version = "3.0.0"

  # insert the 7 required variables here
  region           = var.aws_region
  domain           = var.root_domain
  hasura_subdomain = replace(substr(var.subdomain_hasura, 0, 26), "/[^-A-Za-z0-9_]/g", "_")

  #   app_subdomain            = "app.${var.env}."
  hasura_version_tag       = var.hasura_version
  hasura_admin_secret      = var.hasura_graphql_admin_secret
  hasura_jwt_secret_algo   = var.hasura_jwt_algo
  hasura_jwt_secret_key    = var.hasura_jwt_secret_key
  rds_db_name              = var.hasura_db_name
  rds_instance             = var.hasura_db_instance
  rds_username             = var.hasura_db_username
  rds_password             = var.hasura_db_password
  rds_version              = "11.5"
  rds_parameter_group_name = "default.postgres11"
  # if you have an existing TF Hasura deploy, uncomment this
  # create_iam_service_linked_role = false 

  ecs_cluster_name         = "hasura-${var.env}-cluster"
  multi_az                 = true
  az_count                 = 2
  vpc_enable_dns_hostnames = true

  environment = [
    {
      name  = "HASURA_GRAPHQL_UNAUTHORIZED_ROLE"
      value = "anonymous"
    },
    {
      name  = "HASURA_GRAPHQL_ENABLED_LOG_TYPES"
      value = "startup, http-log, webhook-log, websocket-log, query-log"
    },
    {
      name  = "LAMBDA_ENDPOINT"
      value = var.hasura_lambda_endpoint
    },
    {
      name  = "LAMBDA_HASURA_EVENT_HANDLER"
      value = var.hasura_lambda_event_handler
    },
    {
      name  = "HASURA_GRAPHQL_CORS_DOMAIN"
      value = "https://*.${env}.${var.root_domain}, https://*.${var.root_domain}"
    },
  ]
}

### Fix the JWT secret key :
#    {
#       name  = "HASURA_GRAPHQL_JWT_SECRET",
#       value = "{\"type\":\"${var.hasura_jwt_secret_algo}\", \"key\": \"${var.hasura_jwt_secret_key}\"}"
#     }
