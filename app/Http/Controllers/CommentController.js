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
		response.status(200).json(comment)


	}

}

module.exports = CommentController
