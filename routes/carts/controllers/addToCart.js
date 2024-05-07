import createCustomError from "../../../createCustomError.js";
import cartModel from "../../../models/cartModel.js";

const addToCart = async (req, res, next) => {
  try {
    console.log("visited")
    let updatedCart
    const { productId, quantity, price, img, name } = req.body;
    const userId = req.user.id;
    const thisCart = await cartModel.findOne({ userId });
    if (thisCart) {
      const productExistsInCart = thisCart.products.some(
        (product) => product.productId === productId
      );
      console.log(productExistsInCart)
      const changeOnlyQuantity = (product) => {
        if (product.productId === productId) {
            console.log("matched")
          return { ...product, quantity,price,img, name };
        }
        return product;
      };
      if (productExistsInCart) {
        updatedCart= await cartModel.findOneAndUpdate(
          { userId },
          {
            $set: {
              products: thisCart.products.map((product) =>
                changeOnlyQuantity(product)
              ),
            },
          },
          {new:true}
        );
      }
      else{
        updatedCart= await cartModel.findOneAndUpdate({userId}, {$push:{products:{productId,quantity,img,price, name}}},{new:true})
      }
      res.status(200).json({success:true, result:updatedCart})

    }
    else{
        return res.status(400).json({success:false, result:'cart not found'})
    }
  } catch (error) {
    next(createCustomError(error.message));
  }
};
export default addToCart;
