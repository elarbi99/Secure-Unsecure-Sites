# Security in Database System Application

This project was created using [Angular CLI](https://github.com/angular/angular-cli) version `16.2.1`, which relies on `Node.js  18.17.1` and `npm 9.6.7`. The secure backend is powered by Java Spring Boot, Java `JDK 17` and utilizes MySQL as the database.

# Table of Contents
1. [Extensions and Dependencies](#extensions-and-dependencies) 
2. [Get Started](#get-started) 
3. [Code scaffolding](#code-scaffolding) 
4. [Build](#build) 
5. [Running unit tests](#running-unit-tests) 
6. [Running end-to-end tests](#running-end-to-end-tests) 
7. [Help](#running-unit-tests) 

## Extensions and Dependencies

Extensions
<ul>
   <li>Angular language Service - Angular </li>
   <li>Prettier - Code formatter </li>
   <li>Auto Rename Tag - Jun Han (optional) </li>
   <li>Angular Snippets (Version 16) - John Papa (optional) </li>
   <li>Extension pack for Java - Microsoft </li>
   <li>Spring Boot Extension Pack - VMware </li>
   <li>Lombok Annotations Support for VS Code - Microsoft </li>
</ul>


## Get Started

After cloning the project, run the following command to check if you have the correct system. <i>Open Terminal window and runs these command to check version of Node.js, NPM Client and Angular run on your system.</i>

<ul>
   <li><code>node -v</code> </li>
   <li><code>npm -v</code> </li>
   <ol>If you encounter errors while running the aforementioned two commands, it indicates that Node.js is not installed on your system. Go to <a href="https://nodejs.org/en">Nodejs</a> website to download and install on your machine.</ol>
   <li><code>ng version</code> to check for version of Angular and include Node, and npm version.</li>
   <ol>If you encounter errors while running the aforementioned command, it indicates that Angular is not installed on your system. Run two commands below: </ol>
   <ol><code>npm install -g @angular/cli</code></ol>
   <ol><code>Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned</code> </ol>
   <li>In terminal, cd into each project application and run this command <code>npm install</code> </li>
</ul>

Cd inside each application, Run `ng serve` to start the application. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Code scaffolding

<p>Run <code>ng generate component comp/component-name</code> to generate a new component.</p>
<p>Run <code>ng generate module model/model-name</code> to generate a new model.</p>
<p>Run <code>ng generate service service/service-name</code> to generate a new service.</p>

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
