'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/users','UserController.all')
Route.post('/users/create','UserController.signUp')
Route.post('/login','UserController.login')

Route.get('/links','LinkController.read')
Route.post('/links/create','LinkController.add')
Route.delete('/links/:linkID/delete','LinkController.remove')

Route.get('/links/comments','CommentController.read')
Route.post('/links/:linkID/comments/create','CommentController.post')
Route.delete('/links/:linkID/comments/:commentID/delete','CommentController.remove')

Route.post('/links/:linkID/vote','VoteController.addVote')

