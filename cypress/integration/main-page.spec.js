context('12 Agile Principles Main Page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  const principles = [
    {
      name: 'Customer Satisfaction',
      description: 'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.'
    },
    {
      name: 'Welcome Change',
      description: 'Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage.'
    },
    {
      name: 'Deliver Frequently',
      description: 'Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.'
    },
    {
      name: 'Working Together',
      description: 'Business people and developers must work together daily throughout the project.'
    },
    {
      name: 'Motivated Team',
      description: 'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.'
    },
    {
      name: 'Face to Face',
      description: 'The most efficient and effective method of information to and within a development is face-to-face conversation.'
    },
    {
      name: 'Working Software',
      description: 'Working software is the primary measure of progress.'
    },
    {
      name: 'Constant Pace',
      description: 'Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.'
    },
    {
      name: 'Technical Excellence',
      description: 'Continuous attention to technical excellence and good design enhances agility.'
    },
    {
      name: 'Simplicity',
      description: 'Simplicity—the art of maximizing the amount of work not done—is essential.'
    },
    {
      name: 'Self Organization',
      description: 'The best architectures, requirements, and designs emerge from self-organizing teams.'
    },
    {
      name: 'Reflect and Adjust',
      description: 'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.'
    },
  ];

  it('should navigate through all 12 agile methods', () => {
    principles.map(principle => {
      cy.get('[data-cy="principle-image"]').should('be.visible')
        .get('[data-cy="principle-title"]')
        .should('contain', `${principle.name}`).should('be.visible')
        .get('[data-cy="principle-subtitle"]')
        .should('contain', `${principle.description}`).should('be.visible')
        .get('.v-window__next > .v-btn > .v-btn__content > .v-icon').click()
    });
  });
});
