import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";

export async function POST(req) {
    const res = await req.formData()
    console.log("Request", res)
    console.log("price ids", res.getAll('price_ids'))
    let lineItems = res.getAll('price_ids').map((priceId) => ({
        price: priceId,
        quantity: 1
    }));
    try {
        const headerlist = await headers();
        const origin = headerlist.get('origin');

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',
            success_url: `${origin}/success`,
            cancel_url: `${origin}/cancel`,
        })

        return NextResponse.redirect(session.url, 303)
    } catch (err) {
        console.log("Error", err)
        return NextResponse.json(
            { error: err.message },
            { status: err.statusCode || 500 }
        )
    }
}