import Toptitle from "../layouts/top_title";







export default function DashboardPage() {


  
  const images = [
    "dashboardimage1.png",
    "dashboardimage2.png",
    "dashboardimage3.png",
    "dashboardimage4.png",
    "dashboardimage5.png",
    "dashboardimage6.png",
  ];

  return (
<>

    <Toptitle title="Welcome back, John" />
    <p className="text-1xl opacity-50 mt-2">Measure your advertising ROI and report website traffic.</p>
    <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <div key={i} className="rounded-xl overflow-hidden">
          <img src={"/images/dashboardimages/" + img} className="w-full cursor-pointer object-cover" alt="session" />
        </div>
      ))}
    </div>

</>
  );
}
