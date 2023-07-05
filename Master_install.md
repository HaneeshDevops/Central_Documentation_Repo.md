```
sudo su -
yum update –y

# upgrade AWS cli to v2
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

# install git
yum install -y git

# install docker
yum install -y docker
systemctl start docker
systemctl enable docker

# install docker compose
curl -SL https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
sudo yum update -y

# install maven
sudo yum install -y maven

# upgrade maven
wget http://mirror.olnevhost.net/pub/apache/maven/maven-3/3.2.5/binaries/apache-maven-3.2.5-bin.tar.gz
tar xzf apache-maven-3.2.5-bin.tar.gz
sudo mv apache-maven-3.2.5 /opt/
export PATH=/opt/apache-maven-3.2.5/bin:$PATH
source ~/.bashrc

# install jenkins:
wget -O /etc/yum.repos.d/jenkins.repo \
    https://pkg.jenkins.io/redhat-stable/jenkins.repo
rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
yum upgrade -y
yum install jenkins -y
systemctl enable jenkins
sudo usermod -aG docker jenkins
systemctl start jenkins
systemctl status jenkins

# install kubectl 
sudo curl --silent --location -o /usr/local/bin/kubectl \
"https://dl.k8s.io/release/$(curl --silent --location https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo chmod +x /usr/local/bin/kubectl

# install ekctl
sudo curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin

cat /var/lib/jenkins/secrets/initialAdminPassword

```
