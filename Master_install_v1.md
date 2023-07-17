```
sudo su -
yum update –y

# install git
yum install -y git

# install docker
yum install -y docker
systemctl start docker
systemctl enable docker

# install maven
sudo yum install -y maven

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

cat /var/lib/jenkins/secrets/initialAdminPassword

```
## SonarQube : [Link](https://github.com/HaneeshDevops/Central_Documentation_Repo.md/blob/main/SonarQube.md)
# Optional:

## Add jenkins to docker group:
```
sudo chown jenkins:docker /var/run/docker.sock
sudo chmod 660 /var/run/docker.sock
```
## upgrade maven
```
wget https://archive.apache.org/dist/maven/maven-3/3.2.5/binaries/apache-maven-3.2.5-bin.tar.gz
tar -xf apache-maven-3.2.5-bin.tar.gz
sudo mv apache-maven-3.2.5 /opt/
vi ~/.bashrc
```
### Add the following lines at the end of the file:
```
export MAVEN_HOME=/opt/apache-maven-3.2.5
export PATH=$MAVEN_HOME/bin:$PATH
```
### execute this command
```
source ~/.bashrc
```
