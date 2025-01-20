import { EntityService } from '../services/entity-service';

const entity = new EntityService();

describe('API Tests example', () => {

    test('Should get list of crocodiles', async () => {
        await entity.getList('/get-example/route', 200);
    });

});