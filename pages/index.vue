<template>
  <v-layout class="d-flex justify-center fill-height flex-column">
    <v-carousel hide-delimiters touch class="d-flex justify-center">
      <v-carousel-item
        v-for="(principle, index) in principles"
      >
          <v-card shaped light min-height="400px" max-width="400px" class="pt-3">
            <v-img data-cy="principle-image" :src="principle.src" class="mx-auto" width="70%"></v-img>
            <v-card-title data-cy="principle-title">{{ index + 1}}. {{ principle.name }}</v-card-title>
            <v-card-subtitle data-cy="principle-subtitle">{{ principle.description }}</v-card-subtitle>
          </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    principles: [
      {
        name: 'Customer Satisfaction',
        description: 'Our highest priority is to satisfy the customer through early and continuous delivery of valuable software.',
        src: '/agile-icons/01-customer-satisfaction.png'
      },
      {
        name: 'Welcome Change',
        description: 'Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage.',
        src: '/agile-icons/02-change.png'
      },
      {
        name: 'Deliver Frequently',
        description: 'Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.',
        src: '/agile-icons/03-deliver-frequently.png'
      },
      {
        name: 'Working Together',
        description: 'Business people and developers must work together daily throughout the project.',
        src: '/agile-icons/04-working-together.png'
      },
      {
        name: 'Motivated Team',
        description: 'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.',
        src: '/agile-icons/05-motivated.png'
      },
      {
        name: 'Face to Face',
        description: 'The most efficient and effective method of information to and within a development is face-to-face conversation.',
        src: '/agile-icons/06-face-to-face.png'
      },
      {
        name: 'Working Software',
        description: 'Working software is the primary measure of progress.',
        src: '/agile-icons/07-working-software.png'
      },
      {
        name: 'Constant Pace',
        description: 'Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.',
        src: '/agile-icons/08-constant-pace.png'
      },
      {
        name: 'Technical Excellence',
        description: 'Continuous attention to technical excellence and good design enhances agility.',
        src: '/agile-icons/09-good-design.png'
      },
      {
        name: 'Simplicity',
        description: 'Simplicity—the art of maximizing the amount of work not done—is essential.',
        src: '/agile-icons/10-simplicity.png'
      },
      {
        name: 'Self Organization',
        description: 'The best architectures, requirements, and designs emerge from self-organizing teams.',
        src: '/agile-icons/11-self-organization.png'
      },
      {
        name: 'Reflect and Adjust',
        description: 'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.',
        src: '/agile-icons/12-reflect-and-adjust.png'
      },
    ]
  }),
}
</script>

<style>
  .v-window__container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
</style>
