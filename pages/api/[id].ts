import type { NextApiRequest, NextApiResponse } from 'next'
import { Get } from '../../network/api'

const paste = (req: NextApiRequest, res: NextApiResponse) => {

    Get(req.url!.replaceAll('/api/', '')).then((d) => {
        res.status(200).send(d)
    })
}
export default paste