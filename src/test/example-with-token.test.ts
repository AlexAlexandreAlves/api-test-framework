import { authorizationToken } from '../auth/auth-example';
import { routeExample } from '../routes/example-with-token-route';
import { EntityService } from '../services/entity-service';
import { data } from '../data/general-data';

const entity = new EntityService();
const getWithTokenRoute = routeExample.getExampleWithToken;
const createWithTokenRoute = routeExample.getExampleWithToken;
let token: string;

beforeAll(async () => {
    token = await new authorizationToken().getToken();
});

describe('API Tests example', () => {

    test('Should get list with token', async () => {
        await entity.getList(getWithTokenRoute, 200, token);
    });

    test('Should create a new crocodile', async () => {
        await entity.create(createWithTokenRoute, data.createRegister, 201, token, data.createRegister);
    });
});