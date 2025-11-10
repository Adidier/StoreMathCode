import 'server-only'

import Stripe from 'stripe'
// import { secret } from '@aws-amplify/backend'

// export const stripe = new Stripe(secret('STRIPE_SECRET_KEY'))
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
