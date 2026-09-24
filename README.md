# GitOps Webshop

A simple static webshop deployed to Kubernetes and managed with Argo CD.

## Structure

- `frontend/` - static webshop source
- `k8s/` - Kubernetes manifests

## GitOps flow

GitHub -> Argo CD -> Kubernetes

The frontend is served by NGINX. There is no database or backend.