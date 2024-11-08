import CreateData from "@/components/CreateData";
import FetchData from "@/components/FetchData";
import UpdateData from "@/components/UpdateData";
import DeleteData from "@/components/DeleteData";

export default function Home() {
  return (
    <div>
      <h1>Veri İşlemleri Sayfası</h1>
      <CreateData />
      <UpdateData />
      <DeleteData />
      <FetchData />
    </div>
  );
}
