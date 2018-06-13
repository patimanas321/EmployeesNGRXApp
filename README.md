# My Notes App

This project is to demonostrate effective use of NGRX store in Angular 6 application.

## Application State Management

Application state is managed by REDUX store (@ngrx/store)

## CRUD Operations

CRUD operations are deligated to Effects. This helps keeping components clean as they only deal with despatching action, rather than worring about calling actual service. (@ngrx/effects)

## Debugging

Chrome REDUX debug extension is used to speed up developing. (@ngrx/store-devtools)

## Fully immutable application.

None of the Observables are subscribed in the application. Observables are passed to Presentational componets with async pipes

## Effective Use of RxJs Operators

RxJs Operators (map, switchMap, mergeMap) are exployed to the most to support immutability.

## Change-Detection Onpush : Increased Perfermance

Presentational componets are marked with ChangeDetectionStrategy OnPush as data binding is done via inputs over async pipes.

## Have a look

Application is hosted in Heroku. Please visit (https://mynotesngrx.herokuapp.com).

### Note

This application is only to demonostrate use NGRX. This uses a data service which simulates all HTTP calls by returing observables.
