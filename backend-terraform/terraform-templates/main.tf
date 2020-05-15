provider "aws" {
  region = "{{var.aws_region}}"
}

terraform {
  backend "s3" {
    encrypt = true
    bucket  = "{{var.s3_bucket}}"
    region  = "{{var.aws_region}}"
    key     = "tfstate-files/{{var.name}}/{{var.env}}.tfstate"
  }
}
