const userName = Math.random().toString(36).substring(2, 15)
const emailId = userName + "@domain.com"
let userId

//CRUD - Create - Read - Update - Delete
describe('Create a new user', () => {
    context('POST /public/v2/users', () => {
        it('Test POST request', () => {
            cy.request({
                method: 'POST',
                url: '/public/v2/users',
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login 
                },
                body: {
                    "name": userName,
                    "gender": "male",
                    "email": emailId,
                    "status": "active"
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(201)
                expect(response.body).to.have.property('id').to.not.be.oneOf([null, ""])
                expect(response.body).to.have.property('name').to.equal(userName)
                expect(response.body).to.have.property('email').to.equal(emailId)
                userId = response.body.id;
                cy.task('log', 'Created a new user with id: ' + userId)
            })


        })


        it('Test POST request with 401 without header', () => {
            cy.request({
                failOnStatusCode:false,
                method: 'POST',
                url: '/public/v2/users',
                body: {
                    "name": userName,
                    "gender": "male",
                    "email": emailId,
                    "status": "active"
                }
            }).then((response) => {
                expect(response.status).to.be.equal(401);   
            })

            

            
        })

        it('Test POST request with Removing one Attribute', () => {
            cy.request({
                failOnStatusCode:false,
                method: 'POST',
                url: '/public/v2/users',
                body: {
                    "name": userName,
                    "email": emailId,
                    "gender":"Ma",
                    "status": "active"
                },
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login 
                }
            }).then((response) => {
                expect(response.status).to.be.equal(422);   
            })

            

            
        })

        it('Test POST request with Different Method Type', () => {
            cy.request({
                failOnStatusCode:false,
                method: 'PATCH',
                url: '/public/v2/users',
                body: {
                    "name": userName,
                    "email": emailId,
                    "gender":"male",
                    "status": "active"
                },
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login 
                }
            }).then((response) => {
                expect(response.status).to.be.equal(404);   
            })

            

            
        })
    })
})

describe('Get user details', () => {
    context('GET /public/v2/users/${userId}', () => {
        it('Test GET request', () => {
            cy.request({
                method: 'GET',
                url: `/public/v2/users/${userId}`,
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(200)
                expect(response.body).to.have.property('name').to.equal(userName)
                expect(response.body).to.have.property('email').to.equal(emailId)
                cy.task('log', 'Retrieved user with id: ' + userId)
            })
        })
    })
})

describe('Update user details', () => {
    context('PUT /public/v2/users/${userId}', () => {
        it('Test PUT request', () => {
            cy.request({
                method: 'PUT',
                url: `/public/v2/users/${userId}`,
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
                },
                body: {
                    "name": "Updated Name",
                    "gender": "male",
                    "email": "updatedemail@domain.com",
                    "status": "active"
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(200)
                expect(response.body).to.have.property('name').to.equal("Updated Name")
                expect(response.body).to.have.property('email').to.equal("updatedemail@domain.com")
                cy.task('log', 'Updated user with id: ' + userId)
            })
        })
    })
})

describe('Delete user', () => {
    context('DELETE /public/v2/users/${userId}', () => {
        it('Test DELETE request', () => {
            cy.request({
                method: 'DELETE',
                url: `/public/v2/users/${userId}`,
                headers: {
                    'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
                }
            }).then((response) => {
                expect(response).to.have.property('status').to.equal(204)
                expect(response.body).to.be.empty
                cy.task('log', 'Deleted user with id: ' + userId)
            })
        })

        it('GET Comments', ()=>{

            cy.request({

                method:'GET',
                url:'/public/v2/posts'

            }).then((response) => {
                expect(response).to.have.property('status').to.equal(200)
            })
        })
    })
})