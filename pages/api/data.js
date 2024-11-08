// pages/api/data.js

import { prisma } from '../../lib/prisma'; // Prisma client'ı

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            // Veritabanından tüm verileri almak
            const data = await prisma.data.findMany(); // Prisma veri modelini kullanıyoruz
            res.status(200).json(data); // JSON formatında veriyi döndürüyoruz
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch data' });
        }
    }
}
