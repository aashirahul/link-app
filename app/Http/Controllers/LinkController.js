'use strict'
const Link = use("App/Model/Link")

class LinkController {

	* read(request,response){

		let readLinks = yield Link.all()
		response.status(200).json(readLinks)


	}

	* add(request,response){
		const isLoggedIn = yield request.auth.check()
		if (!isLoggedIn) {
  			response.unauthorized({error: 'Your must be loggedin to access this resource.'})
		}

		let data = request.only('title','destination_url')
		const user = yield request.auth.getUser()
		data.user_id = user.id
		let link = yield Link.create(data)
		response.status(200).json(link)

	}

	* remove(request,response){
		const isLoggedIn = yield request.auth.check()
		if (!isLoggedIn) {
  			response.unauthorized({error: 'Your must be loggedin to access this resource.'})
		}
		
		const user = yield request.auth.getUser()
		let link = yield Link.findBy('user_id', user.id)
		yield link.delete()
		response.status(200).send('Link Removed')

		}

}

module.exports = LinkController
