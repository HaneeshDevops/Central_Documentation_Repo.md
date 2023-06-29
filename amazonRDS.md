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
