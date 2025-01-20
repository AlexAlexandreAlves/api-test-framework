import { testsuite, testcase } from '../decorators/test-decorators';
import { authorizationToken } from '../auth/authentication';
import { EntityService } from '../services/entity-service';
import { data } from '../data/general-data';

const entity = new EntityService();
let token: string;

beforeAll(async () => {
    token = await new authorizationToken().getToken();
});

testsuite('API Tests example', () => {

    //@params
    //route: string, statusCode: number, token?: string, content?: any, checkResponseMessage?: string
    testcase('Should get list with token', async () => {
        await entity.getList('/public/crocodiles/', 200, token);
    });

    testcase('Should create a new crocodile', async () => {
        await entity.create('/my/crocodiles/', data.createRegister, 201, token, data.createRegister);
    });
});