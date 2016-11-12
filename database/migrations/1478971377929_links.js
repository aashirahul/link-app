'use strict'

const Schema = use('Schema')

class LinksTableSchema extends Schema {

  up () {
    this.create('links', (table) => {
      table.increments()
      table.timestamps()
      table.string('title')
      table.string('destination_url')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
    })
  }

  down () {
    this.drop('links')
  }

}

module.exports = LinksTableSchema
