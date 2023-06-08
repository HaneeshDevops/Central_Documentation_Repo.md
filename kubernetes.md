# KUBERNETEES:

Created IAM user with admin access, created access key & Secret Key
Craeted EC2
Upgraded AWS CLI to version2
Installed eksctl
Installed Kubectl --> 1.24
aws configure
access key & secret Key
[ap-south-1]


Created IAM user with admin access, created access key & Secret Key
Craeted EC2
Upgraded AWS CLI to version2
Installed eksctl
Installed Kubectl --> 1.24
aws configure
access key & secret Key
[ap-south-1]

Install AWS CLI, by default AWS instance gets V1, We need to upgrade to V2: 

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64-2.0.30.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install --bin-dir /usr/local/bin --install-dir /usr/local/aws-cli --update
*Logout and Login again.

Install latest eksctl command:

curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
eksctl version


Install kubectl command maxium one version less than EKS version:

curl -O https://s3.us-west-2.amazonaws.com/amazon-eks/1.24.10/2023-01-30/bin/linux/amd64/kubectl
chmod +x kubectl
sudo mv kubectl /usr/local/bin/kubectl

aws configure
[ap-south-1]


vim eks-config.yaml

apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: spot-cluster
  region: ap-south-1

managedNodeGroups:

# `instanceTypes` defaults to [`m5.large`]
- name: spot-1
  spot: true
  instanceTypes:
    - m5.large
  ssh:
    publicKeyName: k8s

===================================
aws ec2 create-key-pair --key-name k8s --query 'KeyMaterial' --output text > k8s.pem 
[OR]
aws ec2 create-key-pair --key-name k8s --query 'KeyMaterial' --output text > k8s.pem --region ap-south-1

eksctl create cluster --config-file=eks-config.yaml

upgrade your cluster: eksctl upgrade cluster -f eks-config.yaml
eksctl get clusters
//Check region
kubectl get nodes
kubectl get namespaces
