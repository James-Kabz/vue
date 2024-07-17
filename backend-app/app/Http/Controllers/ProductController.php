<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //add product
    public function addProduct(Request $request)
    {
        $request->validate([
            'product_name' => 'required|string|max:255',
            'product_stock' => 'required|integer',
            'product_price' => 'required|numeric',
            'product_description' => 'nullable|string',
            'product_image' => 'required|url',
        ]);

        $product = Product::create([
            'product_name' => $request->product_name,
            'product_stock' => $request->product_stock,
            'product_price' => $request->product_price,
            'product_description' => $request->product_description,
            'product_image' => $request->product_image,
        ]);

        return response()->json($product, 201);
    }

    public function getProduct($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        return response()->json($product);
    }
    public function getProducts(Request $request)
    {
        $products = Product::all();
        return response()->json($products);

    }
}
