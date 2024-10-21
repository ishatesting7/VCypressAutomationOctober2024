describe('Query param demo', function(){

    it('Query param', ()=>{

        cy.request({

            method: 'GET',
            url:'https://reqres.in/api/users',
            qs:{page:2}
        }).then((abc)=>{
            let res = JSON.stringify(abc.body);
            cy.log(res);
            expect(abc.status).to.be.eq(200);
            expect(res).to.be.contain('tobias.funke@reqres.in');
            expect(abc.body.data).have.length(6);
            expect(abc.body.data[1]).have.property('email','lindsay.ferguson@reqres.in');
        })
    })

})