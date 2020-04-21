### DO NOT EDIT.  EDIT TEMPLATE INSTEAD###
provider "aws" {
  region = "us-west-2"
}

terraform {
  backend "s3" {
    encrypt = true
    bucket  = "terraform-state-storage-s3.speedycal.com"
    region  = "us-west-2"
    key     = "tfstate-files/project/development.tfstate"
  }
}
