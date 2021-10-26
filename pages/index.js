import useSWR from 'swr'
import Person from '../components/Person'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
    useSWR('/api/dontThrow', fetcher)
    useSWR('/api/throw', fetcher)
    useSWR('/api/errStatus', fetcher)
    return null
}
