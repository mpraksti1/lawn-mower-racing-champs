describe('Roster Page', () => {
	beforeEach(() => {
		cy.login();
		cy.server();
		cy.route('GET', 'https://players-api.developer.alchemy.codes/api/players', 'fixture:getPlayers.json');
	});
	
	const sizes = ['iphone-6', 'macbook-15'];

	sizes.forEach((size) => {
		it(`Contains players at ${size}`, () => {
			cy.viewport(size);
			cy.visit('/roster');
			cy.contains('Harry');
			cy.contains('Hermione');
			cy.contains('Ron');
		});
	});
});
