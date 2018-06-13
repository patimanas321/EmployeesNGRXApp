# My Notes App

This project is to demonostrate effective use of NGRX store in Angular 6 application.

## Application State Management

Application state is managed by REDUX store (@ngrx/store)

## CRUD Operations

CRUD operations are deligated to Effects. This helps keeping components clean as they only deal with despatching action, rather than worring about calling actual service. (@ngrx/effects)

## Debugging

Chrome REDUX debug extension is used to speed up developing. (@ngrx/store-devtools)

## Fully immutability implementaion.

None of the Observables are subscribed in the application. 

## Effective Use of RxJs Operators

RxJs Operators (map, switchMap, mergeMap) are exployed to the most to support immutability.

## Have a look

Application is hosted in Heroku. Please visit (https://mynotesngrx.herokuapp.com).
