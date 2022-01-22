import database from 'utils/database'
import Carts from 'models/carts'

export default async (req, res) => {
	await database.connect()

	const { userID } = req.body

	const cart = await Carts.findOneAndDelete({ userID })

	res.send('success')

	await database.disconnect()
}