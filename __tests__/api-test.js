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

  describe('getUser', () => {
    it('returns expected user data for chosen USER_ID', async () => {
      // Load the expected data from the JSON file
      const expectedUserData = JSON.parse(fs.readFileSync('__tests__/test_data.json', 'utf-8'));

      // Mock the getUsers function to return the test data
      jest.spyOn(api, 'getUsers').mockResolvedValue(expectedUserData);

      // Mock the validateUserId function to prevent errors
      jest.spyOn(api, 'validateUserId').mockImplementation(() => {});

      // Call the getUser function with the chosen USER_ID
      const userData = await getUser(USER_ID);

      // Find the user data from the test data based on the USER_ID
      const expectedUser = expectedUserData.find(user => user.id === USER_ID);

      // Verify that the returned data matches the expected data
      expect(userData).toEqual(expectedUser);
    });
});
