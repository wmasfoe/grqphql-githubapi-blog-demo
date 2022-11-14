import { gql } from '@apollo/client'
import { client } from './client'

async function query<T extends {[k: string]: string | number | boolean}>(query: any, params: T) {
  const {} = await client.query({query: gql`${query}`})
}
