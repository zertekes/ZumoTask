import { jest } from '@jest/globals';
import fs from 'fs';
import { getUsers, getUser, getPostsForUser, createPostForUser, deletePosts } from '../index';

// change this value to test with different userId
// should be a number between 1 and 10
const USER_ID = 2;

describe('Mock API tests', () => {
  it('should get list of all users', async () => {
    const users = await getUsers();
    expect(users.length).toEqual(10);
  });

  it('should get user by id', async () => {
    const user = await getUser(USER_ID);
    expect(user.id).toEqual(USER_ID);
  });
});

// Task 1
describe('Get user data', () => {
    it('returns expected user data for chosen USER_ID', async () => {
      // Load the expected data from the JSON file
      const expectedUserData = JSON.parse(fs.readFileSync('__tests__/test_data.json', 'utf-8'));

      // Mock the getUsers function to return the test data
      global.getUsers = jest.fn().mockResolvedValue(expectedUserData);

      // Assign a mock implementation to the validateUserId property
      global.validateUserId = jest.fn();

      // Call the getUser function with the chosen USER_ID
      const userData = await getUser(USER_ID);
      // Find the user data from the test data based on the USER_ID
      const expectedUser = expectedUserData.find(user => user.id === USER_ID);
      // Verify that the returned data matches the expected data
      expect(userData).toEqual(expectedUser);
    });
  });

 // Task 2

 describe('Get User Posts', () => {
    it('returns associated posts with valid IDs and the number of posts for the chosen USER_ID', async () => {
      // Call the getPostsForUser function with the chosen USER_ID
      const posts = await getPostsForUser(USER_ID);

      // Verify that the returned posts contain valid IDs
      posts.forEach(post => {
        expect(post.id).toBeGreaterThanOrEqual(1);
        expect(post.id).toBeLessThanOrEqual(100);
      });
      // it can be an assertion if the user does not have any post but this test reason is to validate the post's ids. 
      //If the user does not have any post we can not validate it.
    });
  });

  // Task 3
  describe('createPostForUser', () => {
    it('creates a post for the chosen USER_ID and verifies the response', async () => {
      // Call the createPostForUser function with the chosen USER_ID
      const response = await createPostForUser(USER_ID);

      // Verify the response code in this case is undefined. We can add an expected variable if we want to change it later. 
      // Ideally we should create a separate data file with the different response codes.
      expect(response.statusCode).toBe();

      // Parse the JSON response from the response
      const jsonResponse = await response.json();

      // Validate the post
      expect(jsonResponse.userId).toBe(USER_ID);
      expect(jsonResponse.title).toBe('foo');
      expect(jsonResponse.body).toBe('bar');  

     // We need to delete the post to avoid false validation on the next test run.
     // Get the posted ID from the JSON response
      const postId = jsonResponse.id

     // Add the postId value and delete the post
      await deletePosts(postId);

    // After checking the Documentation  I realized the following:
    // Important: resource will not be really updated on the server but it will be faked as if.
    // Therefore it needs to improve the post validation for example adding a random number to the post and validate it.
    });
  });

 
 