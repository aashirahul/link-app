'use strict'

const Comment = use("App/Model/Comment")


class CommentController {

	* read(request,response){
		let readComments = yield Comment.all()
		response.status(200).json(readComments)

	}


	* post(request,response){
		const isLoggedIn = yield request.auth.check()
		if (!isLoggedIn) {
  			response.unauthorized({error: 'Your must be loggedin to access this resource.'})
		}
		const user = yield request.auth.getUser()
		let linkId = request.param('linkID')
		let data = request.only('comment')
		data.link_id = linkId
		data.user_id = user.id
		let comment = yield Comment.create(data)
		response.status(201).json(comment)
	}

	* remove(request,response){
		const isLoggedIn = yield request.auth.check()
		if (!isLoggedIn) {
  			response.unauthorized({error: 'Your must be loggedin to access this resource.'})
		}
		
		const user = yield request.auth.getUser()
		let comment = yield Comment.findBy('user_id', user.id)
		yield comment.delete()
		response.status(200).send('Comment Removed')

		}
	

}

module.exports = CommentController
