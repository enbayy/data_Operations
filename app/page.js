import CreateData from "@/components/CreateData";
import FetchData from "@/components/FetchData";
import UpdateData from "@/components/UpdateData";
import DeleteData from "@/components/DeleteData";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Veri İşlemleri Sayfası
        </h1>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2 text-black flex justify-center">Veri Oluştur</h2>
            <CreateData />
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2 text-black flex justify-center">Veri Güncelle</h2>
            <UpdateData />
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2 text-black flex justify-center">Veri Sil</h2>
            <DeleteData />
          </div>

          <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <FetchData />
          </div>
        </div>
      </div>
    </div>
  );
}