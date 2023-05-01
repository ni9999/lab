# lab
A simple report taking and marking website for teachers and students. Made with node and MySQL.
# To run locally

Firstly mysql and node both runs on localhost. So the port should be different and have to be declared specificly.
MySql by default runs in 3306 port. Port for node can be anything.
So in node ---------------- listen port 3000 (Let)
in mysql ------------------ port : 3306


Take a look at index.js file. In connection::

```
	host: "127.0.0.1",
	port: "3306",
	user: "gitpod",
	password: "newpassword"
```

Password is the password given when adding gitpod as a user in mysql.

** Setup **
First install MySQL server

`sudo apt-get install mysql-server`

Become superuser. Then run

`service mysql start`

Then in mysql command (run `mysql` to go to mysql commandline). Set new user and password

`CREATE USER 'gitpod'@'localhost' IDENTIFIED BY 'newpassword';`

Then alter the user

`ALTER USER 'gitpod'@'localhost' IDENTIFIED WITH mysql_native_password BY 'newpassword';`

Grant all privilage

`GRANT ALL PRIVILEGES ON *.* TO 'gitpod'@'localhost' WITH GRANT OPTION;`

Now run 

```
npm install
node index.js
```

If it gives an error, run `node index.js` again.


#Usage

It is very simple demo. So simply go 127.0.0.1:3000 to get Student login. Login with id and name.
![Capture](https://user-images.githubusercontent.com/75214894/235439384-73719ee6-58f4-4fc2-9b59-580a2ef4d0cf.PNG)

Then upload something.

![2](https://user-images.githubusercontent.com/75214894/235439477-041d13e4-31fc-4f1c-ab93-2f69a4069a5c.PNG)
![1](https://user-images.githubusercontent.com/75214894/235439513-e1c32c8f-6d2a-4e54-85e1-9d5355e7d2fc.PNG)


Now go to 127.0.0.1:3000/teacher to get teacher login page. Use 123 as password.

![3](https://user-images.githubusercontent.com/75214894/235439576-99a1eb2f-be3a-4a96-8fcb-02691e74bebc.PNG)

You will be able to download student submitted report in id_name as filename.

![4](https://user-images.githubusercontent.com/75214894/235439615-2b564e51-fbd8-44c3-a644-8b815c45b4b8.PNG)

Also you can give marks to the students.

![6](https://user-images.githubusercontent.com/75214894/235439729-dad482ca-231d-422e-a089-6c590aacbf3f.PNG)








