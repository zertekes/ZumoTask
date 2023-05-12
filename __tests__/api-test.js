import { 
    getUsers,
    getUser,
    getPostsForUser,
    createPostForUser
} from "../index"

// change this value to test with different userId
// should be a number between 1 and 10
const USER_ID = 1

describe('Mock API tests', () => {
    // example test using jest
    it('should get list of all users', async () => {
        const users = await getUsers()
        expect(users.length).toEqual(10)
    })

    it('should get user by id', async () => {
        const user = await getUser(USER_ID)
        expect(user.id).toEqual(USER_ID)
    })
})