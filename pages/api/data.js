import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const data = await prisma.data.findMany();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    }
}