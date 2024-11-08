// pages/api/create.js
import { prisma } from '../../lib/prisma'; // prisma.js dosyasını import ettik

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, description } = req.body; // Request'ten gelen veriyi al

        try {
            // Prisma ile veriyi veritabanına ekleyin
            const newData = await prisma.data.create({
                data: {
                    name,
                    description,
                },
            });
            res.status(201).json(newData); // Başarı durumunda response döndür
        } catch (error) {
            console.error(error); // Hata mesajını konsola yazdırın
            res.status(500).json({ error: 'Failed to create data' }); // Hata durumunda 500 döndür
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' }); // POST dışındaki metodlar için hata
    }
}
