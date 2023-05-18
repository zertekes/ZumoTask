import { jest } from '@jest/globals';
import { getUsers, getUser, validateUserId } from "../index";
import fs from 'fs';

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

// Assuming you have imported the necessary dependencies and functions

describe('getUser', () => {
    it('returns expected user data for chosen USER_ID', async () => {
      // Choose a USER_ID for testing
      const USER_ID = 1;
      
      // Mock the API request to return a known user object
      const expectedUserData = {
        id: USER_ID,
        name: 'John Doe',
        email: 'johndoe@example.com',
        // Add other expected properties based on the JSON Placeholder docs
      };
      jest.spyOn(api, 'getUser').mockResolvedValue(expectedUserData);
      
      // Call the getUser function with the chosen USER_ID
      const userData = await getUser(USER_ID);
      
      // Verify that the returned data matches the expected data
      expect(userData).toEqual(expectedUserData);
    });
  });
  
