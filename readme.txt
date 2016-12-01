NOTE:

The project setting, by default, uses JRE 5 for both Tomcat plugin and project. 
I tried to use JRE 6 but seems the I/O has some issues and it always reports 
premature ended file when parsing the XML output.

Before compiling
================

Comment out all sitemesh data in web.xml.

Also modify database connection string in RegistrationServlet.java.

intron database setting:
host: intron.niaid.nih.gov
db: userfollower
user: bsipsoft
passwd: gobsip

bsipdev1 database setting:
host: bsipdev1.niaid.nih.gov
db: test
user: biuser
passwd: bibsip

Compile
=========

Copy the WAR file from local Tomcat instance.

Run
===

Visit http://localhost:8080/netcirchro/

Modify JSP files
================

The file web/index.jsp is the entry form. The file web/keygen.jsp is the key 
generation application and key report form.


