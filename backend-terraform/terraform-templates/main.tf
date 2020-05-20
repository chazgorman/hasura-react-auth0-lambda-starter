provider "aws" {
  region = "{{var.aws_region}}"
}

# us-east-1 is mandatory for using cloudfront.
provider "aws" {
  region = "us-east-1"
  alias  = "us-east-1"
}

terraform {
  backend "s3" {
    encrypt = true
    bucket  = "{{var.s3_bucket}}"
    region  = "{{var.aws_region}}"
    key     = "tfstate-files/{{var.name}}/{{var.env}}.tfstate"
  }
}
