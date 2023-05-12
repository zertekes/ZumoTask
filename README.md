# Zumo QA Assignment

## This is the Zumo app assignment for QA Engineers. You'll find two main tasks

1. Functional automation for API testing
2. Preparing testing scenarios for onboarding flows

Both tasks combined shouldn't take you more than couple of hours. If you have any questions please feel free to get in touch.

Solutions to both tasks should be encompassed within same repository, please commit on a regular basis as we would want to see your process of thinking.
Once you are done please raise a PR and notify us via email.

## Task 1

Functional automation for API testing. Write tests using [Jest](https://jestjs.io/) for the following REST API: [JSON Placeholder](https://jsonplaceholder.typicode.com/)

### Prerequisites

The basic file structure has been set up for you, but you'll need to get a few things set up on your end to run the tests.

* Ensure you have the latest [Node](https://nodejs.org/en/) version

* Clone the repository provided into a location of your choice

* In your terminal, navigate to the location you cloned the repository

* Install required packages by running `yarn install`

* Run tests with `yarn test` (you should see two passing example tests)

If you make any changes to how these tests are run, please create a `TASK1.md` where you can input any instructions and notes required for us to run the tests.

The code for fetching the data you will need for the tests has already been prepared in [index.js]('./index.js') - you shouldn't need to change any of this but you can if you wish, please just note any changes made in the `TASK1.md` file.

Please write your tests in the [api-test.js](./__tests__/api-test.js) file. A couple example tests have been provided to get you started if you are unfamiliar with Jest.

### Requirements

* Validate `getUser` returns expected user data for chosen `USER_ID` - you can look at the [JSON Placeholder Docs](https://jsonplaceholder.typicode.com/) to see the expected format.

* Get this user's associated posts (`getPostsForUser`) and verify they contain valid Post IDs (an Integer between 1 and 100).

* Create a post for this user (`createPostForUser`) and verify the correct response is returned (since this is a mock API, it might not return Response code 200, so check the [documentation](https://jsonplaceholder.typicode.com/))
  * Also check the JSON response of this POST is as expected (you can do something like `const json = await response.json()` to parse the JSON from the response).

## Task 2

Imagine that you are in charge of testing the onboarding flow within our Zumo app (download the app from App Store)

In repository you have cloned, create a new file called `TASK2.md`

In there prepare a step by step checklist of testing flows that cover the following scenarios:

* Registration

* Login

* Wallet creation

Try to prioritise tasks and explain why you find each of them important.

**We don't expect you to work on these tasks for any longer than 2 hours, but feel free to spend longer on it if you want to finish anything off or cover any more test cases.**
