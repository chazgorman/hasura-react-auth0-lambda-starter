module "hasura" {
  #   source  = "Rayraegah/hasura/aws"
  source = "git::https://github.com/maxcan/terraform-aws-hasura?ref=max/01/parameterize-cluster-name"

  #   version = "3.0.0"

  # insert the 7 required variables here
  region           = var.aws_region
  domain           = var.domain
  hasura_subdomain = "hasura.${var.env}"

  #   app_subdomain            = "app.${var.env}."
  hasura_version_tag       = var.hasura_version
  hasura_admin_secret      = var.hasura_graphql_admin_secret
  hasura_jwt_secret_algo   = var.hasura_jwt_algo
  hasura_jwt_secret_key    = var.hasura_jwt_secret_key
  rds_db_name              = var.hasura_db_name
  rds_instance             = var.hasura_db_instance
  rds_username             = var.hasura_db_username
  rds_password             = var.hasura_db_password
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
      value = "https://*.speedycal.com:443, https://*.speedycal.com" #, https://${var.app_subdomain}.${var.domain}:443, https://${var.app_subdomain}.${var.domain}"
    },
  ]
}

### Fix the JWT secret key :
#    {
#       name  = "HASURA_GRAPHQL_JWT_SECRET",
#       value = "{\"type\":\"${var.hasura_jwt_secret_algo}\", \"key\": \"${var.hasura_jwt_secret_key}\"}"
#     }
