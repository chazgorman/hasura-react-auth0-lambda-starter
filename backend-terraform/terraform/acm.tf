resource "aws_acm_certificate" "api_wildcard" {
  domain_name       = "*.${var.env}.${var.root_domain}"
  provider          = aws.us-east-1
  validation_method = "DNS"
}
resource "aws_acm_certificate_validation" "cert" {
  certificate_arn = aws_acm_certificate.api_wildcard.arn
  provider        = aws.us-east-1
}

resource "aws_route53_record" "cert_validation" {
  name    = aws_acm_certificate.api_wildcard.domain_validation_options.0.resource_record_name
  type    = aws_acm_certificate.api_wildcard.domain_validation_options.0.resource_record_type
  zone_id = data.aws_route53_zone.zone.zone_id
  records = ["${aws_acm_certificate.api_wildcard.domain_validation_options.0.resource_record_value}"]
  ttl     = 60
}
