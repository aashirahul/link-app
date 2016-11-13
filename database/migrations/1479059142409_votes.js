'use strict'

const Schema = use('Schema')

class VotesTableSchema extends Schema {

  up () {
    this.create('votes', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.integer('link_id').unsigned()
      table.foreign('link_id').references('links.id')
    })
  }

  down () {
    this.drop('votes')
  }

}

module.exports = VotesTableSchema
