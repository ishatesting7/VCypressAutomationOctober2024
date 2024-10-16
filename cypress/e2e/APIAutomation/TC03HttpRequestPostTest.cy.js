describe('Multiple Way to Handle Post Call', ()=>{



    it('Approach 1', ()=>{
        let url = 'http://restapi.adequateshop.com/api';
        let payload = 
        {
            "tourist_name": "MSD",
            "tourist_email": "INDCAP1@gmail.com",
            "tourist_location": "India"
        }
        cy.request({

            method:'POST',
            url: url+'/Tourist',
            body:payload

        })
        .then((response)=>{

            expect(response.status).to.be.eq(404)
        })

    })
})