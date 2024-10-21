
cy.get('item_4_title_link').then((as)=>{

    let desc = as.text();
    cy.log('Description'  + desc);
})

cy.get('[class="pricebar"]').then((price)=>{

    let priceValue = price.text()
    cy.log('Price'+ priceValue);
})

cy.get('.inventory_item_desc').eq(4).then((description)=>{
    
    let desc = description.text();
    cy.log('Desc'+ desc);
})