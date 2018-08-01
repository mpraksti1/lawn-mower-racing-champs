describe('Add player page', () => {
	beforeEach(() => {
		cy.login();
		cy.server();
		// Cypress routes are one time use
		cy.route('POST', 'https://players-api.developer.alchemy.codes/api/players', 'fixture:createPlayer.json');
		cy.route('GET', 'https://players-api.developer.alchemy.codes/api/players', 'fixture:getPlayers.json');
	});

	const sizes = ['iphone-6', 'macbook-15'];
	
	sizes.forEach((size) => {
		it(`Contains player field labels on ${size}`, () => {
			cy.viewport(size);
			cy.visit('/player/new');
			cy.contains('First Name');
			cy.contains('Last Name');
			cy.contains('Rating');
			cy.contains('Handedness');
		});
	
		it(`Accepts valid email and password at ${size}`, () => {
			cy.viewport(size);
			cy.visit('/player/new');
			cy.get('#firstName').type('Tom');
			cy.get('#lastName').type('Riddle');
			cy.get('#rating').type('10');
			cy.get('#handedness').select('Right');
			cy.get('#create').click();
			cy.url().should('eq', 'http://localhost:3000/roster');
			cy.contains('Tom');
		});
	})
});
