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
