import Products from "../models/product"

export const newProduct = async(req, res, next) => {
    const product = await Products.create(req.body);
    res.status(200).json({message:"Product added successfully"});
}