# data "aws_lambda_function" "pinger" {
#   function_name = "speedycal-lambdas-production-ping_graphql"
# }
# data "aws_api_gateway_rest_api" "pinger_rest_api" {
#   name = "production-speedycal-lambdas"
# }
# output "pinger" {
#   value = "${aws_api_gateway_rest_api.pinger_rest_api.invoke_url}"
# }
