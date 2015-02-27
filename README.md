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


    
