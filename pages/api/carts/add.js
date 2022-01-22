import database from 'utils/database'
import Carts from 'models/carts'

export default async (req, res) => {
	await database.connect()

	const { userID, productID, name, image, price } = req.body
	const quantity = 1

	let cart = await Carts.findOne({ userID })

	if ( cart ) {
		// cart exists for user
		const itemIndex = cart.products.findIndex(x => x.productID == productID)

		if ( itemIndex > -1 ) {
			// product exists in the cart, update the quantity
			let productItem = cart.products[itemIndex];
			productItem.quantity += quantity;
			cart.products[itemIndex] = productItem;
		} else {
			// product does not exists in cart, add new item
			cart.products.push({ productID, name, image, price, quantity })
		}

		cart = await cart.save()
		return res.status(201).send(cart)
	} else {
		// no cart for user, create new cart

		const new_cart = await Carts.create({
			userID,
			products: [{ productID, name, image, price, quantity }]
		})
	}

	await database.disconnect()
}