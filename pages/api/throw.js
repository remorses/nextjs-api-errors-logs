export default function handler(req, res) {
    console.log('stdout')
    console.error('stderr')
    throw new Error('Something went wrong')
}
