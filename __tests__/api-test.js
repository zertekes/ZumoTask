import { jest } from '@jest/globals';
import * as api from "../index";
import fs from 'fs';

// change this value to test with different userId
// should be a number between 1 and 10
const USER_ID = 2;

describe('Mock API tests', () => {
  it('should get list of all users', async () => {
    const users = await api.getUsers();
    expect(users.length).toEqual(10);
  });

  it('should get user by id', async () => {
    const user = await api.getUser(USER_ID);
    expect(user.id).toEqual(USER_ID);
  });
});

describe('getUser', () => {
  it('returns expected user data for chosen USER_ID', async () => {
    // Load the expected data from the JSON file
    const expectedUserData = JSON.parse(fs.readFileSync('__tests__/test_data.json', 'utf-8'));

    // Create a mock object with the original functions and mock functions
    const mockApi = {
      getUsers: jest.fn().mockResolvedValue(expectedUserData),
      validateUserId: jest.fn(),
      originalGetUsers: api.getUsers,
      originalValidateUserId: api.validateUserId
    };

    // Replace the original functions with the mock functions
    api.getUsers = mockApi.getUsers;
    api.validateUserId = mockApi.validateUserId;

    // Call the getUser function with the chosen USER_ID
    const userData = await api.getUser(USER_ID);

    // Verify that the returned data matches the expected data
    expect(userData).toEqual(expectedUserData[USER_ID - 1]);

    // Restore the original functions
    api.getUsers = mockApi.originalGetUsers;
    api.validateUserId = mockApi.originalValidateUserId;
  });
});
