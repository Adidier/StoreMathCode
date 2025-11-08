import 'server-only'

import Stripe from 'stripe'
import { secret } from '@aws-amplify/backend'

export const stripe = new Stripe('STRIPE_SECRET_KEY')
