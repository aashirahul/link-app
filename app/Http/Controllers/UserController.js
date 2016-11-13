'use strict'

const User = use("App/Model/User")
const Hash = use('Hash')

class UserController {

	* all(request,response){
		let users = yield User.all()
		response.status(200).json(users)
	}

	* signUp(request,response){
		let data = request.only('firstName','lastName','email','userName','password')
		data.password = yield Hash.make(data.password)

		try {
			let user = yield User.create(data)
			response.status(200).json(user)
		} catch(e) {
			response.status(400).send("Invalid request. User already exists.")
		}

	}
	* login(request,response){
		let data = request.only('userName','password')

		try {
		  const token = yield request.auth.attempt(data.userName, data.password)
		  response.status(200).send(token)
		} catch (e) {
		  response.unauthorized({error: e.message})
		}
	}
}

module.exports = UserController
