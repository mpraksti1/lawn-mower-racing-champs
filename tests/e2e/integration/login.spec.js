describe('Login Page', () => {
	const sizes = ['iphone-6', 'macbook-15'];

  sizes.forEach((size) => {
		it(`Contains email and password labels at ${size}`, () => {
			cy.viewport(size);
			cy.visit('/auth/login');
			cy.contains('Email');
			cy.contains('Password');
		});

		it(`Accepts valid email and password at ${size}`, () => {
			cy.viewport(size);
			cy.login();
			cy.url().should('eq', 'http://localhost:3000/roster');
		});
	});
});
