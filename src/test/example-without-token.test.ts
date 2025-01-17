import { routeExample } from '../routes/example-without-token-route';
import { EntityService } from '../services/entity-service';

const entity = new EntityService();
const getExample = routeExample.getExample;


describe('API Tests example', () => {

    test('Should get list of crocodiles', async () => {
        await entity.getList(getExample, 200);
    });

});