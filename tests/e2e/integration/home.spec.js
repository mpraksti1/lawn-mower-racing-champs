describe('Home Page', () => {
  const sizes = ['iphone-6', 'macbook-15'];

  sizes.forEach((size) => {
    it(`Visits the landing page in ${size}`, () => {
      cy.viewport(size);
      cy.visit('/');
      cy.contains('Login');
      cy.contains('Register');
    });
  });
});
