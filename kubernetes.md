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

instanceTypes` defaults to [`m5.large`]
- name: spot-1
  spot: true
  instanceTypes:
    - m5.large
  ssh:
    publicKeyName: k8s

aws ec2 create-key-pair --key-name k8s --query 'KeyMaterial' --output text > k8s.pem 
[OR]
aws ec2 create-key-pair --key-name k8s --query 'KeyMaterial' --output text > k8s.pem --region ap-south-1

eksctl create cluster --config-file=eks-config.yaml

upgrade your cluster: eksctl upgrade cluster -f eks-config.yaml
eksctl get clusters
//Check region
kubectl get nodes
kubectl get namespaces

# =================================================================
When Jenkins builds and deploys a new version of your application in a Kubernetes cluster, it typically follows a rolling update strategy. This means that the new version is gradually rolled out while ensuring that the existing containers and services remain available.

Here's how it typically works:

Jenkins starts building the new application based on the code changes pushed to GitHub. It may run tests and perform other necessary tasks as defined in the Jenkins pipeline.

Once the new build is successful, Jenkins creates a new Docker image for the updated version and pushes it to a container registry.

Jenkins interacts with Kubernetes to initiate the deployment process. It typically uses Kubernetes configuration files (such as deployment manifests) that define how the application should be deployed and updated.

Kubernetes follows a rolling update strategy by default. This means that it will gradually update the existing pods with the new version while maintaining the availability of the application.

Kubernetes creates new pods with the new image and gradually replaces the existing pods.
During the rolling update, Kubernetes ensures that a certain number of old pods are running alongside the new ones, avoiding downtime.
The number of pods running the old version and the new version can be controlled using the deployment's replica configuration.
Once the new pods are up and running, Kubernetes starts redirecting traffic to the new pods and gradually scales down the old pods.

By using a rolling update strategy, Kubernetes ensures that there is no disruption in service during the deployment process. It allows for seamless transitioning between different versions of the application. The old containers and images are gradually replaced by the new ones as part of the rolling update process, ensuring a smooth transition and maintaining the availability of the application.

It's worth noting that the exact behavior and update strategy can be customized through Kubernetes deployment configurations. You can specify different update strategies, scaling behaviors, and other parameters to suit your specific requirements.
