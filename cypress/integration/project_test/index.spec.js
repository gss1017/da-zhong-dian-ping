describe('da-zhong-dian-ping', () => {
    it('index', () => {
        cy.visit('/');

        cy.get('.bg').click();

        cy.get('[href="/b"]').click();

        cy.get('input')
            .clear()
            .type(412412341234231412341);
    })
});
