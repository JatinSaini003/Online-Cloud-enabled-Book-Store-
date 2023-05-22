provider "azurerm" {
    features{

    }
}

resource "azurerm_resource_group" "rg1"{
    name = var.rgname
    location = var.location
}

module "ServicePrincipal" {
    source = "./modules/ServicePrincipal"
    service_principal_name = var.service_principal_name

    depends_on = [
      azurerm_resource_group.rg1
    ]
}

data "azurerm_subscription" "primary" {
  
}

resource "azurerm_role_assignment" "role" {
  scope                = data.azurerm_subscription.primary.id
  role_definition_name = "Contributor"
  principal_id         = module.ServicePrincipal.service_principal_object_id

  depends_on = [
    module.ServicePrincipal
  ]
}



resource "azurerm_kubernetes_cluster" "default" {
  name                = "jatin-aks"
  location            = var.location
  resource_group_name = var.rgname
  dns_prefix          = "${var.rgname}-k8s"

  default_node_pool {
    name            = "default"
    node_count      = 2
    vm_size         = "Standard_B2s"
    os_disk_size_gb = 30
  }

  service_principal {
    client_id     = module.ServicePrincipal.client_id
    client_secret = module.ServicePrincipal.client_secret
  }

  role_based_access_control_enabled = true

  tags = {
    environment = "Dev"
  }
}