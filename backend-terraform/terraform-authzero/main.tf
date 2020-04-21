### DO NOT EDIT.  EDIT TEMPLATE INSTEAD###
provider "aws" {
  region = "us-west-2"
}

terraform {
  backend "s3" {
    encrypt = true
    bucket  = "terraform-state-storage-s3.project.xyz"
    region  = "us-west-2"
    key     = "tfstate-files/project/development.tfstate"
  }
}
