### Get a list of all resources in the cluster:
```
kubectl get all
```

### Get detailed information about a specific resource:
```
kubectl describe <resource> <name>
```
### Create a resource from a YAML file:
```
kubectl apply -f <file.yaml>
```
### Delete a resource:
```
kubectl delete <resource> <name>
```
### Scale a deployment:
```
kubectl scale --replicas=<count> deployment <name>
```
### Get logs from a pod:
```
kubectl logs <pod-name>
```
### Execute a command on a pod
```
kubectl exec -it <pod-name> -- <command>
```
### Port forward to a pod:
```
kubectl port-forward <pod-name> <local-port>:<pod-port>
```
### Get the status of a resource:
```
kubectl get <resource>
```
### Get detailed information about a pod's containers:
```
kubectl describe pod <pod-name>
```
### Get the IP address of a service:
```
kubectl get service <service-name> -o=jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

### Enable autoscaling for a deployment:
```
kubectl autoscale deployment <deployment-name> --min=<min-replicas> --max=<max-replicas> --cpu-percent=<target-cpu-utilization>
```
### Rollback a deployment to a previous revision:
```
kubectl rollout undo deployment <deployment-name>
```
### Get the status of a rollout:
```
kubectl rollout status deployment <deployment-name>
```
### Create a secret from a file:
```
kubectl create secret generic <secret-name> --from-file=<path-to-file>
```
### Label a resource:
```
kubectl label <resource> <name> <key>=<value>
```
### Annotate a resource:
```
kubectl annotate <resource> <name> <key>=<value>
```
### Execute a command in a pod's container:
```
kubectl exec -it <pod-name> --container=<container-name> -- <command>
```
### Generate a YAML file for a resource:
```
kubectl get <resource> <name> -o yaml --export > <file.yaml>
```




























