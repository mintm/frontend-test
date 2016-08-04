# [aircall.io](https://aircall.io) - Frontend technical test

This test is a part of our hiring process at Aircall for [frontend positions](https://aircall.io/jobs#FrontendDeveloper). It should take you between 3 and 6 hours depending on your experience.

**Feel free to apply! Drop us a line with your LinkedIn/GitHub/Twitter/AnySocialProfileWhereYouAreActive at jobs@aircall.io**



## Summary

The goal of this test is to make you code a small AngularJS app. We have prepared the skeleton of an app for you, but please change whatever you want (Gulpfile, CSS files, HTML structure, JS structure...).

The app will have two different pages:
- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call

Show us what you can do in a max of 6 hours :) Don't spend too much time on designing your app, our design team will hate it anyway.

**Bonus:** the final user should be able to archive a call. The call will not be displayed anymore on the Activity Feed. Please code that only if you have free time.


To give you an idea, here what our app looks like:

![app](https://cloud.githubusercontent.com/assets/630714/17402260/9aa2f7fe-5a52-11e6-9a15-e37c9ad9ed8e.png)


## Code

In this repository you'll find a simple AngularJS project with three controllers and one model:

- **AppController** - the main controller. You won't have to do anything in this one.
- **ActivitiesController** - the Activity Feed controller. Handle the call list.
- **ActivityDetailController** - the Activity Detail. Handle a specific call actions. Archiving a call can be done here.

Use the dependency you want to fetch data: `$http`, `$resource`...


## Installation

You're smart, right? So you shouldn't need any instruction :)


Didn't succeed to install it on your own? Don't waste 20min more, there you go:

```
npm install
gulp
```

## API documentation

### Routes

Here is the API address: https://aircall-job.herokuapp.com.

As you can see, it's hosted on a free Heroku server, which means that the first time you will fetch the API, it will take few seconds to answer.

- **GET** - https://aircall-job.herokuapp.com/activities: get calls to display in the Activity Feed
- **GET** - https://aircall-job.herokuapp.com/activities/:id: retrieve a specific call details
- **POST** - https://aircall-job.herokuapp.com/activities/:id: update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:
```
{
  is_archived: true
}
```
- **GET** - https://aircall-job.herokuapp.com/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.



## Submission

Fork this repository and send us a pull request. We'll review it and get back to you in order to talk about your code!

Contact us at jobs@aircall.io if you need more details.
