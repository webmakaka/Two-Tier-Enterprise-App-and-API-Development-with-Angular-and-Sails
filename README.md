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
    Website: http://temp.com
    Callback URL: http://127.0.0.1:8000


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
