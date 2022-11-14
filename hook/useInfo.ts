import { useQuery } from '@apollo/client'
import info from '../apollo/info.gql'

type resType = {
  avatarUrl: string,
  login: string,
  location: string | null,
  isDeveloperProgramMember: boolean,
  name: string,
  resourcePath: string,
  loading: boolean
}

function useInfo(): {
  loading: boolean,
  data: resType,
} {
  const { loading, data } = useQuery<{
    viewer: resType
  }>(info)
  return {
    loading,
    data: (!!data?.viewer ? {...data.viewer} : data) as resType
  }
}

export default useInfo
