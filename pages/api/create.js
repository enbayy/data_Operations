import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, description } = req.body; 

        try {
            const newData = await prisma.data.create({
                data: {
                    name,
                    description,
                },
            });
            res.status(201).json(newData);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to create data' }); 
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' }); 
    }
}