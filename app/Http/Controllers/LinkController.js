'use strict'
const Link = use("App/Model/Link")

class LinkController {

	* read(request,response){
		let getvotes = yield Link.query().leftOuterJoin('votes','links.id','votes.link_id').select('links.*').groupBy('votes.link_id')
							.count('votes.link_id as cnt').orderBy('cnt','desc').orderBy('id','desc').fetch()
		
		response.status(200).json(getvotes)


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
		response.status(201).json(link)

	}

	* remove(request,response){
		const isLoggedIn = yield request.auth.check()
		if (!isLoggedIn) {
  			response.unauthorized({error: 'Your must be loggedin to access this resource.'})
		}
		let linkId = request.param('linkID')
		const user = yield request.auth.getUser()
		let link = yield Link.findBy('id', linkId)

		if(link.user_id == user.id){
			yield link.delete()
			response.status(200).send('Link Removed')
		} else {
			response.status(401).send('Cannot delete the Link')
		}

	}

}

module.exports = LinkController
