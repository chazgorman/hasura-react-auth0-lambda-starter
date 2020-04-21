provider "auth0" {
  domain        = var.authzero_domain
  client_id     = var.authzero_mgmt_client_id
  client_secret = var.authzero_mgmt_client_secret
  debug         = true
  version       = "~> 0.5"
}

resource "auth0_tenant" "tenant" {
  default_audience = "https://${var.authzero_domain}/api/v2/"
  friendly_name    = "${var.name}-${var.env}"
  picture_url      = "${var.static_site}/logo.png"
  support_email    = "support@${var.app_email_domain}"
  support_url      = "${var.static_site}/support"
  universal_login {
    colors {
      primary         = "#120338"
      page_background = "#110237"
    }
  }
  flags {
    universal_login = true
  }

  allowed_logout_urls = [
    "${var.static_site}"
  ]
  session_lifetime = 720
  sandbox_version  = "8"
}

resource "auth0_client" "client" {
  name        = "${var.name}-${var.env}"
  description = var.authzero_description
  app_type    = var.authzero_app_type
  logo_uri    = "${var.static_site}/logo.png"

  callbacks = [
    "${var.app_site}/oauth/auth0"
  ]
  oidc_conformant = false
  allowed_logout_urls = [
    "${var.app_site}",
  ]
  grant_types = ["refresh_token", "authorization_code", "implicit"]
  allowed_origins = [
    var.app_site
  ]
  web_origins = [var.app_site]
}

resource "auth0_rule_config" "secret" {
  key   = "HASURA_GRAPHQL_ADMIN_SECRET"
  value = var.hasura_graphql_admin_secret
}

resource "auth0_rule_config" "email_domain" {
  key   = "APP_EMAIL_DOMAIN"
  value = var.app_email_domain
}

resource "auth0_rule_config" "endpoint" {
  key   = "HASURA_ENDPOINT"
  value = var.hasura_endpoint
}

resource "auth0_rule" "add_claims" {
  name    = "TF-${var.name}-hasura-add-user-claims"
  script  = file("${path.module}/rules/add-claims.js")
  enabled = true
  order   = 12
}
resource "auth0_rule" "user_sync" {
  name    = "TF-${var.name}-hasura-sync-user"
  script  = file("${path.module}/rules/user-sync.js")
  enabled = true
  order   = 15
}
resource "auth0_rule" "sync_tokens" {
  name    = "TF-${var.name}-hasura-sync-tokens"
  script  = file("${path.module}/rules/user-tokens.js")
  enabled = true
  order   = 19
}

# resource "auth0_connection" "auth0" {
#   name            = "auth0"
#   strategy        = "auth0"
#   enabled_clients = []
#   options {

#     disable_signup = true
#   }
# }

resource "auth0_connection" "apple" {
  name            = "apple"
  strategy        = "apple"
  enabled_clients = ["${auth0_client.client.id}"]
}

resource "auth0_connection" "facebook" {
  name            = "facebook"
  strategy        = "facebook"
  enabled_clients = ["${auth0_client.client.id}"]
}

# resource "auth0_resource_server" "server" {
#   name       = "${var.name}-${var.env} Resource Server (Managed by Terraform)"
#   identifier = "https://api.example.com/client-grant"
#   scopes {
#     value       = "https://www.googleapis.com/auth/calendar"
#     description = "Calendar"
#   }
#   scopes {
#     value       = "https://www.googleapis.com/auth/calendar.events"
#     description = "Calendar Events"
#   }
#   scopes {
#     value       = "https://www.googleapis.com/auth/calendar.addons.execute"
#     description = "Calendar Addons"
#   }
# }

# resource "auth0_client_grant" "grant" {
#   client_id = auth0_client.client.id
#   audience  = auth0_resource_server.server.identifier
#   scope = [
#     "https://www.googleapis.com/auth/calendar",
#     "https://www.googleapis.com/auth/calendar.events",
#     "https://www.googleapis.com/auth/calendar.addons.execute"
#   ]
# }
