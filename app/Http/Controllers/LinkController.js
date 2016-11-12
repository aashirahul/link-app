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
		let link = yield Link.create(data)
		response.status(200).json(link)

	}

}

module.exports = LinkController
