import { useQuery } from 'react-apollo'

import QUERY_VALUE from './schema.graphql'

const HelloData = () => {
  const { loading, error, data } = useQuery(QUERY_VALUE)

  if (loading) {
    return 'Loading…'
  }

  if (error) {
    return `Error ${error}`
  }

  return `Done fetching ${data.category.name}`
}

export default HelloData
