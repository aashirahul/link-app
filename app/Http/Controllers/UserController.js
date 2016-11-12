'use strict'

const User = use("App/Model/User")
const Hash = use('Hash')

class UserController {

	* signUp(request,response){
		let data = request.all()
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
			console.log(e);
		  response.unauthorized({error: e.message})
		}
	}
}

module.exports = UserController
