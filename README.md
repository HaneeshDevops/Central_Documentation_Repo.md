# Docker_Documentation

## Switch to superuser:
```sh
sudo su -
 ```
 ## Install Docker:
 ```sh
 yum install -y docker
 ```
 ## Start Docker service:
```sh
 systemctl start docker
 ```

## Enable Docker service on boot:
```sh
systemctl enable docker
 ```

##  Download Docker Compose:
```sh
curl -SL https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose
 ```

## Set executable permissions for Docker Compose:
```sh
sudo chmod +x /usr/local/bin/docker-compose
 ```
## Create a symbolic link for Docker Compose:
```sh
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
 ```
## Update system packages:
```sh
sudo yum update
 ```

## Install Maven:
```sh
sudo yum install maven
 ```
## Download and extract Maven 3.2.5:
```sh
wget http://mirror.olnevhost.net/pub/apache/maven/maven-3/3.2.5/binaries/apache-maven-3.2.5-bin.tar.gz
tar xzf apache-maven-3.2.5-bin.tar.gz
sudo mv apache-maven-3.2.5 /opt/
 ```
## Set Maven environment variables:
```sh
export PATH=/opt/apache-maven-3.2.5/bin:$PATH
source ~/.bashrc
 ```
## Check Maven version:
```sh
mvn -version
 ```
## Install Git:
```sh
sudo yum install git
 ```
## Clone a Git repository:
```sh
git clone -b branch https://github.com/Haneesh55/CAPEcommerceApplication.git
 ```
## Navigate to the project directory:
```sh
cd CAPEcommerceApplication
 ```
## Clean Maven project:
```sh
mvn clean
 ```
## Build Maven project:
```sh
mvn install -DskipTests
 ```
## vi Dockerfile:
```sh
 ```
## Edit docker-compose.yml:
```sh
vi docker-compose.yml
 ```
## Start the Docker containers:
```sh
docker-compose up -d
 ```
## Check running containers:
```sh
docker ps
 ```
## Check images:
```sh
docker images
 ```
## check application to run: 
```sh
docker logs myapplication
 ```
