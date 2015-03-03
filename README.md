# Two-Tier-Enterprise-App-and-API-Development-with-Angular-and-Sails
[Pluralsight] Two Tier Enterprise App and API Development with Angular &amp; Sails [2015]


## 01. Introduction


### 04. Sails Setup

    mkdir socialfleet
    cd socialfleet

    npm install -g sails
    sails new --no-frontend
    sails lift


### 05. Web API Demo

    sails generate api user
    sails lift
    2

    http://localhost:1337/user
    http://localhost:1337/user/create?name=Alex
    http://localhost:1337/user/create?name=Tim
    http://localhost:1337/user/create?name=Tim&email=a@a.a
    http://localhost:1337/user


## 02. Posting and Authentication


### 03. Creating Our Login Service Endpoint Skeleton

    http://localhost:1337/user/login
    В консоли сервера появился вывод сообщения.

    В models.js разкомментировали migrate: 'alter', чтобы sails не задавал вопросов при старте


### 04. Registering Our App with Twitter

    https://apps.twitter.com/

    Name: socialfleet
    Description: a social media scheduler
    Website: http://marley.org
    Callback URL: http://127.0.0.1:80


### 05. Setting up Angular

    mkdir backend
    mv * ./backend

    mkdir frontend
    cd frontend
    npm init

    npm install --save-dev bower
    bower init
    bower install --save angular


### 06. Automating Tasks with Gulp

    cd frontend/
    npm install --save-dev gulp
    gulp


### 07. Setting up the Server

    cd frontend/
    npm install --save gulp-webserver
    gulp

localhost:8000


### 08. Optimizing Our Gulp Tasks

    gulp

### 09. How to Autoload Vendor Files with Gulp

    cd frontend/
    npm install --save-dev main-bower-files
    npm install --save-dev gulp-inject
    gulp


### 10. Autoloading Our Custom Scripts

    gulp


### 11. Creating the Login Controller

    gulp
    http://localhost/

По клику по кнопке в консоли печатается "works"


### 12. Using Gulp Watchers to Autorun Scripts

    cd frontend/
    npm install --save-dev del
    gulp


## 03. Posts


### 02. Twitter Login Setup with Satellizer

https://github.com/sahat/satellizer

    cd frontend/
    bower install --save satellizer
    gulp


### 03. How to Talk to Our Backend with a Proxy

    cd backend/
    sails lift


    cd frontend/
    gulp

    http://localhost/

    По нажатию на кнопку получаем сообщение "hello"


### 04. Finishing Authentication

https://github.com/sahat/satellizer/blob/master/examples/server/node/server.js


    cd backend/
    npm install --save request
    npm install --save jwt-simple
    npm install --save moment

    apps.twitter.com
    v Allow this application to be used to Sign in with Twitter

В chrome при попытке авторизации получаем в Resources -> Local Storage -> satellizer_token
