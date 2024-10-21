import { faker } from '@faker-js/faker';

describe('Auth Value', ()=>{
    let accessToken

        before(()=>{

            cy.request({

                method:'POST',
                url:'https://simple-books-api.glitch.me/api-clients/',
                body:
                    {
                        "clientName": "Hakan",
                        "clientEmail": faker.internet.email()
                     }
            
                
            }).then((response)=>{

                accessToken = response.body.accessToken;
                cy.log(accessToken);
            })

        })

        it('Request for Book', ()=>{
            
            cy.request({
                method: 'POST',
                url:'https://simple-books-api.glitch.me/orders',
                body:{
                    "bookId": 1,
                    "customerName": faker.internet.userName()
                },
                headers:{
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }).then((response)=>{
                let res = JSON.stringify(response.body);
                cy.log(res);
            })
        })
})