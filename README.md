cf-spring-demo
===========

Simple Annotation Based Spring Demo Web-Application for Cloud Foundry.

Dependencies
------------

-    Running mysql database
-    Maven
-    Spring
-    Hibernate

Usage
-----

Login to the Swisscom Application Cloud and switch to your Org and Space, then

    mvn clean package
    cf create-service mariadb small maria-d
    cf push 


Configuration
-------------

Local

If you want to connect to a mysql database which does not run on localhost or
your connection settings differ from the provided defaults, then you want to
modify the file `src/main/resources/application.properties`.

Cloud

In the class `SpringDemoWebApplication` it is assumed that exactly one
service instance is bound to this application (see JavaDoc comments). This
service instance is assumed to be mysql or mariadb. If these assumptions
are not valid, you want to modify the code.

Feedback
--------

Most welcome. Create pull-requests or contact me via email.
