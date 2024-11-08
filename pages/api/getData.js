import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const data = await prisma.data.findMany();
            res.status(200).json(data);
        } catch (error) {
            console.error(error); 
            res.status(500).json({ error: 'Failed to fetch data' }); 
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' }); 
    }
}