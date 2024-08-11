import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [false, "Please Enter Product name"]
    },
    description: {
        type: String,
        required: [false, "Please Enter Product description"]
    },
    price: {
        type: Number,
        required: [false, "Please enter product price"],
    },
    images: [
        {
            public_id: {
                type: String
            },
            url: {
                type: String
            }
        }
    ],

    category: {
        type: String,
        required: [false, "Please enter product price"],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Sports",
            ],
            message: "Please select correct category!"
        }
    },
    seller: {
        type: String,
        required: [false, "Please enter product seller"],
    },
    stock: {
        type: Number,
        required: [false, "Please enter product stock"],
    },
    ratings: {
        type: Number,
        default: 0,
    },

    reviews: [
        {
            rating: {
                type: Number,
                required: false,
            },
            comment: {
                type: String,
                required: false,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// const productSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         required: [false, "Please Enter Product name"]
//     },
//     description: {
//         type: String,
//         required: [false, "Please Enter Product description"]
//     }
// });

const Products = mongoose.models.Products || mongoose.model("Products", productSchema);

export default Products;