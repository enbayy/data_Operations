// pages/api/getData.js
import { prisma } from '../../lib/prisma'; // prisma.js dosyasını import ettik

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Prisma ile veritabanından veri çekiyoruz
            const data = await prisma.data.findMany();
            res.status(200).json(data); // Veriyi başarılı şekilde döndürüyoruz
        } catch (error) {
            console.error(error); // Hata durumunda konsola yazdırıyoruz
            res.status(500).json({ error: 'Failed to fetch data' }); // Hata mesajı
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' }); // GET dışındaki metodlar için hata
    }
}
