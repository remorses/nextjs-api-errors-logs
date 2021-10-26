export default function handler(req, res) {
    console.log('stdout')
    console.error('stderr')
    res.status(500).text('error')
}
