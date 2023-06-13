## DEPLOYMENT: PostgreSQL
```
vi postgresql-deployment
```
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: postgresql
spec:
  replicas: 1
  selector:
    matchLabels:
      app: postgresql
  template:
    metadata:
      labels:
        app: postgresql
    spec:
      containers:
        - name: postgresql
          image: haneeshdevops/posgres:latest
          env:
            - name: POSTGRES_USER
              value: postgres
            - name: POSTGRES_PASSWORD
              value: "9963"
            - name: POSTGRES_DB
              value: DATA_BASE_NAME
          ports:
            - containerPort: 5432

```
## SERVICE: PostgreSQL
```
vi postgresql-service.yaml
```
```
apiVersion: v1
kind: Service
metadata:
  name: postgresql
spec:
  selector:
    app: postgresql
  ports:
    - name: postgresql
      port: 5432
      targetPort: 5432

```

## DEPLOYMENT: Application
```
vi application-deployment
```
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: javapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: javapp
  template:
    metadata:
      labels:
        app: javapp
    spec:
      containers:
        - name: javapp
          image: haneeshdevops/springbootecommerceapplication_app:latest
          env:
            - name: DB_HOST
              value: postgresql
            - name: DB_PORT
              value: "5432"
          ports:
            - containerPort: 8084

```

## application service
```
vi application-service.yaml
```
```
apiVersion: v1
kind: Service
metadata:
  name: javapp
spec:
  selector:
    app: javapp
  ports:
    - name: http
      port: 8084
      targetPort: 8084

```

## Create the PostgreSQL deployment and service by applying the following YAML files:
```
kubectl apply -f postgresql-deployment.yaml
kubectl apply -f postgresql-service.yaml
```

## Verify that the PostgreSQL deployment and service are running:
```
kubectl get deployments
kubectl get services
```

## Update the application deployment with the modified YAML file:
```
kubectl apply -f application-deployment.yaml
```

## Verify that the application deployment is running:
```
kubectl get deployments
```

## Create the application service:
```
kubectl apply -f application-service.yaml
```

## Verify that the application service is created:
```
kubectl get services
```
