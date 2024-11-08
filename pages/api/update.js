// pages/api/update.js
import { prisma } from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { id, name, description } = req.body; // Request'ten gelen veriyi al

    try {
      // Prisma ile veriyi güncelleyin
      const updatedData = await prisma.data.update({
        where: { id: id }, // Güncellenmek istenen veriyi belirleyin
        data: {
          name,
          description,
        },
      });
      res.status(200).json(updatedData); // Başarı durumunda response döndür
    } catch (error) {
      console.error(error); // Hata mesajını konsola yazdırın
      res.status(500).json({ error: 'Failed to update data' }); // Hata durumunda 500 döndür
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' }); // PUT dışındaki metodlar için hata
  }
}
