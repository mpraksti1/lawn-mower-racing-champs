describe('Register Page', () => {
	beforeEach(() => {
		cy.server();
		cy.route('POST', 'https://players-api.developer.alchemy.codes/api/user', 'fixture:createUser.json');
	});

	const sizes = ['iphone-6', 'macbook-15'];

  sizes.forEach((size) => {
		it(`Contains email and password labels in ${size}`, () => {
			cy.viewport(size);
			cy.visit('/auth/register');
			cy.contains('First Name');
			cy.contains('Last Name');
			cy.contains('Email');
			cy.contains('Password');
			cy.contains('Confirm Password');
			cy.contains('Register');
		});

		it(`Accepts valid email and password ${size}`, () => {
			cy.viewport(size);
			cy.visit('/auth/register');
			cy.get('#firstName').type('Billy');
			cy.get('#lastName').type('Bob');
			cy.get('#email').type('billybob@example.com');
			cy.get('#password').type('billybob@example.com');
			cy.get('#confirmPassword').type('billybob@example.com');
			cy.get('#register').click();
			cy.url().should('eq', 'http://localhost:3000/roster');
			cy.contains('Roster');
		});
	});
});
