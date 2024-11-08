// pages/api/delete.js
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body; // Silinecek verinin ID'sini al

    try {
      // Prisma ile veriyi silin
      const deletedData = await prisma.data.delete({
        where: { id: id }, // Silinecek veriyi ID'ye göre belirleyin
      });
      res.status(200).json(deletedData); // Başarı durumunda response döndür
    } catch (error) {
      console.error(error); // Hata mesajını konsola yazdırın
      res.status(500).json({ error: 'Failed to delete data' }); // Hata durumunda 500 döndür
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // DELETE dışındaki metodlar için hata
  }
}
