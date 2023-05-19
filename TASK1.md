Task 1
Functional automation for API testing. Write tests using Jest for the following REST API: JSON Placeholder

Prerequisites
The basic file structure has been set up for you, but you'll need to get a few things set up on your end to run the tests.

Ensure you have the latest Node version

Clone the repository provided into a location of your choice

In your terminal, navigate to the location you cloned the repository

Install required packages by running yarn install

Run tests with yarn test (you should see two passing example tests)

If you make any changes to how these tests are run, please create a TASK1.md where you can input any instructions and notes required for us to run the tests.

The code for fetching the data you will need for the tests has already been prepared in index.js - you shouldn't need to change any of this but you can if you wish, please just note any changes made in the TASK1.md file.

Please write your tests in the api-test.js file. A couple example tests have been provided to get you started if you are unfamiliar with Jest.

Requirements
Validate getUser returns expected user data for chosen USER_ID - you can look at the JSON Placeholder Docs to see the expected format.

Get this user's associated posts (getPostsForUser) and verify they contain valid Post IDs (an Integer between 1 and 100).

Create a post for this user (createPostForUser) and verify the correct response is returned (since this is a mock API, it might not return Response code 200, so check the documentation)

Also check the JSON response of this POST is as expected (you can do something like const json = await response.json() to parse the JSON from the response).

                    ***********************************************

Notes: 
The first task that validates the getUser was the most challanging as I never used Jest before. However after I spent a few hours on that I could adopt my  learning journey and complete the other task in the API automation.
Please see  the comments in the code api-test.js file. I added an extra json file for a test data that includes all user details to validate against the API response. In my opinion it is a good practice to separate the test data from the test code.