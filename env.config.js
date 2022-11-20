import { NEXT_PUBLIC_TOKEN } from './local.config'
export const token = process.env.NEXT_PUBLIC_DOMAIN_ENV === 'dev' ? NEXT_PUBLIC_TOKEN : process.env.NEXT_PUBLIC_TOKEN