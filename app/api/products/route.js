import { NextResponse } from "next/server";

export async function POST(request) {
  /* -id => auto()
        -title 
        -slug => auto()
        -description
        -image/images[]
        -sku
        -barcode
        -productPrice
        -salePrice
        -category
        -Farmer
        -tags[] */
  try {
    const productData = await request.json();
    /* const newCategory = { title, slug, sku, barcode, imageUrl, description }; */
    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Product",
        error,
      },
      { status: 500 }
    );
  }
}
