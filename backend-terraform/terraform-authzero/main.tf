### DO NOT EDIT.  EDIT TEMPLATE INSTEAD###
provider "aws" {
  region = "us-west-2"
}

terraform {
  backend "s3" {
    encrypt = true
    bucket  = "POPULATED_BY_TEMPLATE"
    region  = "us-west-2"
    key     = "tfstate-files/development.tfstate"
  }
}
