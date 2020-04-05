# resource "aws_acm_certificate" "api_wildcard" {
#   domain_name       = "*.api.speedycal.com"
#   validation_method = "EMAIL"
# }
# resource "aws_acm_certificate_validation" "cert" {
#   certificate_arn = "${aws_acm_certificate.api_wildcard.arn}"
# }
