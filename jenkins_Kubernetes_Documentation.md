# Jenkins with Kubernetes (AZURE+AWS):
## step1: Create an EC2 instance installed with git,maven,docker,jenkins
## step2: Create a kubernetes cluster:
```
Create a kubernetes cluster
From cloud shell:
Configure cloud shell with 2 connect commands given at connect location of kubernetes
Once cloud shell configured then apply : cat /home/jallipalli_haneesh/.kube/config
The above directory gives kube-config file. Copy It from starting to end & save it as kube-config.txt any where on desktop
Install git here
Clone the git repo for mainly for deployment & service yml files : https://github.com/HaneeshDevops/ecomapp.git
Kubectl is already pre installed
```
##  step3: After launcing jenkins add the following plugins
```
Docker
Docker pipeline
Kubernetes CLI
```
### Go to configuration location in jenkins & add the following configuration (global config)
### Add the credentials of Docker: Select username & password format
```
ID : DockerRegistry
Description : Docker Hub
```

### Also add the credentials of Kubeconfig: Select secret file format
```
ID : k8sgroup
Description : Kube-config.txt file upload
```

## SonarQube Credentials in jenkins :
```
sonarurl : http://3.80.229.101:9000
SonarQube : sqp_4aade36d795a91ac38aac1c6eba9a92ceaa182a2 (token)
```
## Step4 : Now build a pipeline & add the target repo to start CI-CD process
