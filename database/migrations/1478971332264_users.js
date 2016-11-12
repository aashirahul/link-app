'use strict'

const Schema = use('Schema')

class UsersTableSchema extends Schema {

  up () {
    this.create('users', (table) => {
      table.increments()
      table.timestamps()
      table.string('firstName')
      table.string('lastName')
      table.string('email').unique()
      table.string('userName').unique()
      table.string('password',40).unique()


    })
  }

  down () {
    this.drop('users')
  }

}

module.exports = UsersTableSchema
