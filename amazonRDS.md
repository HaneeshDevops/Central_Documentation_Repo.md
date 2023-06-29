## Java command to run application locally
```
java -jar EcommereceApp-rest-0.0.1-SNAPSHOT.jar
```
## change your application context by adding end point 
Endpoint
quantum.cpycekcpbfl2.us-west-2.rds.amazonaws.com
```
spring.datasource.driver-class-name=org.postgresql.Driver
spring.datasource.url=jdbc:postgresql://quantum.cpycekcpbfl2.us-west-2.rds.amazonaws.com/QUANTUM
spring.datasource.username=postgres
spring.datasource.password=12345678
#spring.datasource.password=9963
spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## Later connect to RDS with Pgadmin (in local system)
 ### select new server
 ### mention the unique name of RDS database
 ### paste the end-point provided by RDS
 ### provide the user name & password that you have given while creating RDS databse in aws.(password must be 8 characters)
