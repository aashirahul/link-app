'use strict'

const Vote = use("App/Model/Vote")

class VoteController {

	* addVote(request,response){
		const isLoggedIn = yield request.auth.check()
		if (!isLoggedIn) {
  			response.unauthorized({error: 'Your must be loggedin to access this resource.'})
		}

		try{
			const user = yield request.auth.getUser()
			let linkId = request.param('linkID')
			let data = {'user_id' : user.id, 'link_id' : linkId}	
			let vote = yield Vote.create(data)
			response.status(201).send('Vote Added')
		} catch (e) {
		  response.status(409).send('Already Voted')
		}

		
	}

}

module.exports = VoteController
