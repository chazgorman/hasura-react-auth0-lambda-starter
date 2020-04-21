variable "s3_bucket" {
  type = string
}

variable "aws_region" {
  type = string
}

variable "name" {
  type = string
}

variable "root_domain" {
  type        = string
  description = "The root domain of the project, i.e. myproject.xyz"
}

variable "subdomain_hasura" {
  type        = string
  description = "Subdomain, relative to `root_domain` where hasura is served from"
}

variable "app_domain" {
  type        = string
  description = "Fully qualified domain name where the react app exists"
}

variable "app_site" {
  type = string
}

variable "static_site" {
  type = string
}

variable "az" {
  type = string
}

variable "az_count" {
  type    = string
  default = "2"
}

variable "env" {
  type = string
}

variable "hasura_graphql_admin_secret" {
  type = string
}

variable "hasura_version" {
  type    = string
  default = "v1.1.0"
}

# variable "hasura_endpoint" {
#   type = "string"
# }

variable "hasura_jwt_algo" {
  type    = string
  default = "RS512"
}

variable "hasura_jwt_secret_key" {
  type = string
}

variable "hasura_db_username" {
  type = string
}

variable "hasura_db_name" {
  type = string
}

variable "hasura_db_password" {
  type = string
}

variable "hasura_db_instance" {
  type    = string
  default = "db.t2.small"
}

variable "hasura_access_key" {
  type = string
}

variable "hasura_lambda_event_handler" {
  type = string
}

variable "hasura_endpoint" {
  type = string
}

variable "hasura_lambda_endpoint" {
  type = string
}

variable "authzero_domain" {
  type = string
}

variable "authzero_mgmt_client_secret" {
  type = string
}

variable "authzero_mgmt_client_id" {
  type = string
}

