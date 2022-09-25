import UserController from '../../src/controller/userController'
import UserService from '../../src/service/userService'

jest.mock('../../src/database/repositories/userRepository.ts')

const sut = () => {
    new UserController()
}

describe('Test Controller', () => {
    beforeEach(() => {
        jest.resetAllMocks()
    })

    describe('index', () => {
        it('')
    })
})