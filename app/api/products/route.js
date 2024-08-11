import dbConnect from "@/backend/config/dbConnect";
import Products from "@/backend/models/product";
import { NextResponse } from "next/server";

export async function POST(request)  {
    const product = await request.json();
    await dbConnect();
    try {
        await Products.create(product);
        return NextResponse.json({message:"Product added"}, {status:200});
    } catch (error) {
        return NextResponse.json({message:"Something went wrong!"});
    }
}


// import dbConnect from "@/backend/config/dbConnect";
// import { newProduct } from "@/backend/controllers/productController";
// import nextConnect from 'next-connect';
// import { default as nextConnect } from 'next-connect';


// await dbConnect();

// const handler = nextConnect();

// handler.use(async (req, res, next) => {
//     await dbConnect(); 
//     next();
// });

// handler.post(async(req, res) => {
//     await Products.create(req.body);
//     res.status(200).json({message:"Product added successfully"});
// });

// export { handler as POST };

