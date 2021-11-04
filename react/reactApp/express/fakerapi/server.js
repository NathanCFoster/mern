const express = require("express");
const app = express();
const port = 3000;
const faker = require('faker');
const User = require('./classes/user');
const Company = require('./classes/Company');

// class User {
//     constructor() {
//         this._id = faker.datatype.uuid();
//         this.firstName = faker.name.firstName();
//         this.lastName = faker.name.lastName();
//         this.phoneNumber = faker.phone.phoneNumber();
//         this.email = faker.internet.email();
//         this.password = faker.internet.password();
//     }
// }

// class Company {
//     constructor() {
//         this._id = faker.datatype.uuid();
//         this.name = faker.company.companyName();
//         this.address = {
//             'street': faker.address.streetName(),
//             'city': faker.address.city(),
//             'state': faker.address.state(),
//             'zipCode': faker.address.zipCode(),
//             'county': faker.address.country()
//         }
//     }
// }

app.get("/api/users/new", (req, res) => {
    res.json( new User.user() );
});

app.get('/api/companies/new', (req, res) => {
    res.json( new Company.Company() );
})

app.get("/api/user/company", (req, res) => {
    res.json({
        'user': new User.user(),
        'company': new Company.Company()
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));