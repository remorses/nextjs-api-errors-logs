export default function handler(req, res) {
    console.log('stdout')
    console.error('stderr')
    res.status(200).send('Hello World!')
    throw new Error('Something went wrong')
}
