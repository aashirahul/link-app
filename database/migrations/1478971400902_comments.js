'use strict'

const Schema = use('Schema')

class CommentsTableSchema extends Schema {

  up () {
    this.create('comments', (table) => {
      table.increments()
      table.timestamps()
      table.string('comment')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.integer('link_id').unsigned()
      table.foreign('link_id').references('links.id')

    })
  }

  down () {
    this.drop('comments')
  }

}

module.exports = CommentsTableSchema
