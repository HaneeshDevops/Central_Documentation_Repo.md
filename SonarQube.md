Note: java is mandatory
====================================
# Step1:
```
sudo su -
cd /opt
wget https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-10.1.0.73491.zip
unzip sonarqube-10.1.0.73491.zip
useradd sonar
```
# Step2:
```
visudo :
sonar        ALL=(ALL)       NOPASSWD: ALL
```
# Step3 :
```
chown -R sonar:sonar /opt/sonarqube-10.1.0.73491
chmod -R 775 /opt/sonarqube-10.1.0.73491
ll
```
# switch to sonar user : 
```
su sonar -
cd sonarqube-10.1.0.73491/bin/linux-x86-64
command : ./sonar.sh start
status check : ./sonar.sh status
```
================================================
# Sonar Scanner installation:
```
cd /opt
wget https://binaries.sonarsource.com/Distribution/sonar-scanner-cli/sonar-scanner-cli-4.6.2.2472-linux.zip
unzip sonar-scanner-cli-4.6.2.2472-linux.zip
cd sonar-scanner-4.6.2.2472-linux
```
## add the following in vi editor
```
vi conf/sonar-scanner.properties
```
```
sonar.host.url=http://localhost:9000
sonar.login=YOUR_AUTHENTICATION_TOKEN
```
```
chmod +x bin/sonar-scanner
```
## in vi editor add the following 
```
vi ~/.bashrc
```
```
export PATH="$PATH:/opt/sonar-scanner-4.6.2.2472-linux/bin"
```

```
source ~/.bashrc
sonar-scanner --version
```

