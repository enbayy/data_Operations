import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    try {
      const deletedData = await prisma.data.delete({
        where: { id: id },
      });
      res.status(200).json(deletedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}