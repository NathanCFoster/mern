const faker = require('faker');

class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            'street': faker.address.streetName(),
            'city': faker.address.city(),
            'state': faker.address.state(),
            'zipCode': faker.address.zipCode(),
            'county': faker.address.country()
        }
    }
}

export default Company