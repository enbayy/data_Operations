import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, name, description } = req.body;

    try {
      const updatedData = await prisma.data.update({
        where: { id: id },
        data: {
          name,
          description,
        },
      });
      res.status(200).json(updatedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to update data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}