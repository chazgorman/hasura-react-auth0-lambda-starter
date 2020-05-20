variable "app_email_domain" {
  type        = string
  description = "Fully qualified (since it could be separate from root_domain) domain for email"
}

variable "app_site" {
  type = string
}

variable "static_site" {
  type = string
}

variable "name" {
  type = string
}

variable "env" {
  type = string
}

variable "hasura_graphql_admin_secret" {
  type = string
}

variable "hasura_endpoint" {
  type = string
}

variable "authzero_app_type" {
  type = string
}

variable "authzero_description" {
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

