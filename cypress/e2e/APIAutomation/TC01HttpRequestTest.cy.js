
describe('Http Request', ()=>{

let minm = 10000;
let maxm = 99999;
let randomN = Math.floor(Math.random() * (maxm - minm + 1)) + minm;

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let result = ' ';
let length = 8;
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    it('POST Call', ()=>{
        
        cy.request({

            method:'POST',
            url:'https://petstore.swagger.io/v2/pet',
            body:
                {
                    "id": randomN,
                    "category": {
                        "id": randomN,
                        "name": " QDopdMon"
                    },
                    "name": " QDopdMon",
                    "photoUrls": [
                        " QDopdMon"
                    ],
                    "tags": [
                        {
                            "id": randomN,
                            "name": " QDopdMon"
                        }
                    ],
                    "status": "available"
                }
            

        }).its('status').should('eq',200)
    })

    it('GET Call', ()=>{

        cy.request('GET', `https://petstore.swagger.io/v2/pet/${randomN}`)
        .its('status')
        .should('eq', 200)
    })

    it('DELETE Call', ()=>{

        cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${randomN}`)
        .its('status')
        .should('eq', 200)
    })
    //~



})

describe('Http Request', ()=>{

    let minm = 10000;
    let maxm = 99999;
    let randomN = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = ' ';
    let length = 8;
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
    
    
        
        it('POST Call', ()=>{
            
            cy.request({
    
                method:'POST',
                url:'https://petstore.swagger.io/v2/pet',
                body:
                    {
                        "id": randomN,
                        "category": {
                            "id": randomN,
                            "name": " QDopdMon"
                        },
                        "name": " QDopdMon",
                        "photoUrls": [
                            " QDopdMon"
                        ],
                        "tags": [
                            {
                                "id": randomN,
                                "name": " QDopdMon"
                            }
                        ],
                        "status": "available"
                    }
                
    
            }).its('status').should('eq',200)
        })
    
        it('GET Call', ()=>{
    
            cy.request('GET', `https://petstore.swagger.io/v2/pet/${randomN}`)
            .its('status')
            .should('eq', 200)
        })
    
        it('DELETE Call', ()=>{
    
            cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${randomN}`)
            .its('status')
            .should('eq', 200)
        })
        //~
    
    
    
    })