import Toptitle from "../layouts/top_title"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NewButton from "../ui/NewButton";
import { FaEye } from "react-icons/fa";


// === Types ===
interface Client {
  id: string;
  name: string;
  email: string;
  registered: string; // ISO format: "2024-06-01"
  status: "Active" | "Inactive";
  riminderTitle?: string;
  reminderDate?: string;
  riminderTime?: string;
}

// === Dummy Data ===
const initialClients: Client[] = [
  { id: "U100", name: "John Cutter", email: "hello123@gmail.com", registered: "2024-06-01", status: "Active",riminderTitle:"Meeting with client", reminderDate:"2024-06-15", riminderTime:"10:00 AM" },
  { id: "U101", name: "John Cutter", email: "hello123@gmail.com", registered: "2024-06-08", status: "Inactive",riminderTitle:"Project deadline", reminderDate:"2024-06-20", riminderTime:"5:00 PM" },
  { id: "U102", name: "John Cutter", email: "hello123@gmail.com", registered: "2024-06-01", status: "Inactive",riminderTitle:"Team lunch", reminderDate:"2024-06-18", riminderTime:"1:00 PM" },
  { id: "U121", name: "John Cutter", email: "hello123@gmail.com", registered: "2024-06-07", status: "Inactive",riminderTitle:"Budget review", reminderDate:"2024-06-25", riminderTime:"3:00 PM" },
  { id: "U112", name: "John Cutter", email: "hello123@gmail.com", registered: "2024-06-03", status: "Active",riminderTitle:"Client follow-up", reminderDate:"2024-06-22", riminderTime:"11:00 AM" },
  { id: "U123", name: "John Cutter", email: "hello123@gmail.com", registered: "2024-06-01", status: "Active",riminderTitle:"Strategy meeting", reminderDate:"2024-06-30", riminderTime:"2:00 PM" },
  { id: "U103", name: "John Cutter", email: "hello123@gmail.com", registered: "2024-06-05", status: "Active",riminderTitle:"Performance review", reminderDate:"2024-06-28", riminderTime:"4:00 PM" },
  { id: "U132", name: "John Cutter", email: "hello123@gmail.com", registered: "2024-06-04", status: "Active",riminderTitle:"Sales presentation", reminderDate:"2024-06-27", riminderTime:"9:00 AM" },
  { id: "U145", name: "Alex Morgan", email: "alex.morgan@example.com", registered: "2024-05-28", status: "Active",riminderTitle:"Marketing meeting", reminderDate:"2024-06-12", riminderTime:"10:30 AM" },
  { id: "U156", name: "Sarah Lee", email: "sarah.lee@gmail.com", registered: "2024-06-10", status: "Inactive",riminderTitle:"Product launch", reminderDate:"2024-06-29", riminderTime:"6:00 PM" },
  { id: "U157", name: "Michael Brown", email: "mbrown@example.com", registered: "2024-07-15", status: "Active",riminderTitle:"Quarterly review", reminderDate:"2024-07-20", riminderTime:"3:30 PM" },
  { id: "U158", name: "Emma Davis", email: "emma.d@example.com", registered: "2024-04-20", status: "Inactive",riminderTitle:"Team building event", reminderDate:"2024-05-15", riminderTime:"12:00 PM" },
];



function RemindersPage() {

    const [clients] = useState<Client[]>(initialClients);
    const [searchTerm, setSearchTerm] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [clientFilter, setClientFilter] = useState<string>("All");

      const uniqueClients = Array.from(
        new Set(clients.map((c) => c.name))
      );
    const itemsPerPage = 10;
  
    // Reset to first page when filters change
    const resetPage = () => setCurrentPage(1);
  
    // Filtering Logic
    const filteredClients = clients.filter((client) => {
      const searchLower = searchTerm.toLowerCase();

      const matchesSearch =
        client.id.toLowerCase().includes(searchLower) ||
        client.name.toLowerCase().includes(searchLower) ||
        client.email.toLowerCase().includes(searchLower);



      const matchesClient =
        clientFilter === "All" || client.name === clientFilter;

      const clientDate = client.reminderDate
        ? new Date(client.reminderDate)
        : null;   

      const fromDate = dateFrom ? new Date(dateFrom) : null;
      const toDate = dateTo ? new Date(dateTo) : null;

      const afterFrom = !fromDate || (clientDate && clientDate >= fromDate);
      const beforeTo = !toDate || (clientDate && clientDate <= toDate);

      return (
        matchesSearch &&
        matchesClient &&
        afterFrom &&
        beforeTo
      );
    });

  
    // Pagination
    const totalPages = Math.ceil(filteredClients.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredClients.length);
    const currentClients = filteredClients.slice(startIndex, endIndex);
  
    // Generate visible page numbers (max 5 shown, centered around current)
    const getPageNumbers = () => {
      const pages: number[] = [];
      const maxVisible = 5;
      let start = Math.max(1, currentPage - Math.floor(maxVisible / 2));
      let end = Math.min(totalPages, start + maxVisible - 1);
  
      if (end - start + 1 < maxVisible) {
        start = Math.max(1, end - maxVisible + 1);
      }
  
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      return pages;
    };
  
    const navigate = useNavigate();
    const handleShowClient = (client: Client) => {
       navigate(`../viewreminder`);
       console.log(client);
      // Replace with modal or navigation logic
    };



  return (
<>
        <div className="flex justify-between items-center gap-5">
              <Toptitle title="Reminders" />
              <NewButton buttontext="Create Reminder" link="../addreminder"/>
        </div>
        
        <section className="py-6 lg:py-8">
            <div className="mx-auto max-w-full px-0">
              <div className="bg-[#161617] rounded-lg shadow-lg overflow-hidden">
                {/* Filters & Search */}
                <div className="p-6 space-y-5 border-b border-gray-700">
                  {/* Search Input */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => {
                        setSearchTerm(e.target.value);
                        resetPage();
                      }}
                      className="block w-full pl-10 pr-4 py-3 text-sm text-white bg-[#040404] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#37B5FF] focus:border-[#37B5FF] transition placeholder-gray-500"
                      placeholder="Search by ID, Name or Email..."
                    />
                  </div>

                  {/* Client Name Filter  & Date Filters */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <select
                    value={clientFilter}
                    onChange={(e) => {
                      resetPage();
                      setClientFilter(e.target.value);
                    }}
                    className="bg-[#040404] border border-gray-700 text-white text-sm rounded-lg 
                              rounded-lg focus:ring-2 focus:ring-[#37B5FF] px-4 py-3"
                  >
                    <option value="All">All</option>
                    {uniqueClients.map((client) => (
                      <option key={client} value={client}>
                        {client}
                      </option>
                    ))}
                  </select>

                    <input
                      type="date"
                      value={dateFrom}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                        resetPage();
                      }}
                      className="bg-[#040404] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#37B5FF] focus:border-[#37B5FF] px-4 py-3 transition"
                    />

                    <input
                      type="date"
                      value={dateTo}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                        resetPage();
                      }}
                      className="bg-[#040404] border border-gray-700 text-white text-sm rounded-lg focus:ring-2 focus:ring-[#37B5FF] focus:border-[#37B5FF] px-4 py-3 transition"
                    />
                  </div>
                </div>

                {/* Desktop Table */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase bg-[#040404] text-white">
                      <tr>
                        <th scope="col" className="px-6 py-4">S. No</th>
                        <th scope="col" className="px-6 py-4">Client</th>
                        <th scope="col" className="px-6 py-4">Reminder Title</th>
                        <th scope="col" className="px-6 py-4">Reminder Date</th>
                        <th scope="col" className="px-6 py-4">Reminder Time</th>
                        <th scope="col" className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentClients.map((client) => (
                        <tr
                          key={client.id}
                          className="border-b border-gray-700 hover:bg-[#1a1a1a] transition-colors duration-200"
                        >
                          <td className="px-6 py-4 font-medium text-white">{client.id}</td>
                          <td className="px-6 py-4">{client.name}</td>
                          <td className="px-6 py-4">{client.riminderTitle}</td>
                          <td className="px-6 py-4">
                            {/* {new Date(client.registered).toLocaleDateString("en-GB")}
                             */}
                             {client.reminderDate}
                          </td>
                          <td className="px-6 py-4">
                              {client.riminderTime}
                          </td>
                          <td className="px-6 py-4 text-right actionbtntable">
                            <button
                              onClick={() => handleShowClient(client)}
                              className="font-medium text-[#37B5FF] hover:underline transition"
                            >
                              <FaEye />

                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden divide-y divide-gray-700">
                  {currentClients.map((client) => (
                    <div
                      key={client.id}
                      onClick={() => handleShowClient(client)}
                      className="p-6 bg-[#161617] hover:bg-[#1a1a1a] transition-colors duration-200 cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-xs text-gray-500">Client ID</p>
                          <p className="text-lg font-semibold text-white">{client.id}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            client.status === "Active"
                              ? "bg-green-900/50 text-green-300"
                              : "bg-red-900/50 text-red-300"
                          }`}
                        >
                          {client.status}
                        </span>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-gray-500">Client</p>
                          <p className="text-white font-medium">{client.name}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Reminder Title</p>
                          <p className="text-white break-all">{client.riminderTitle}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Reminder Date</p>
                          <p className="text-white">
                            {/* {new Date(client.registered).toLocaleDateString("en-GB")} */}
                            {client.reminderDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">Reminder Time</p>
                          <p className="text-white">
                            {/* {new Date(client.registered).toLocaleDateString("en-GB")} */}
                            {client.riminderTime}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 text-right">
                        <span className="text-[#37B5FF] font-medium hover:underline transition">
                          Show Details →
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

{/* Pagination */}
<nav className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-[#161617] border-t border-gray-700">
  <p className="text-sm text-gray-400 mb-4 sm:mb-0">
    Showing{" "}
    <span className="font-semibold text-white">
      {filteredClients.length === 0 ? 0 : startIndex + 1}-{endIndex}
    </span>{" "}
    of <span className="font-semibold text-white">{filteredClients.length}</span> entries
  </p>

  <div className="flex items-center space-x-2 buttonbrbottom">
    <button
      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
      disabled={currentPage === 1}
      className="px-4 py-2 bigbutton text-sm font-medium rounded-lg bg-[#37B5FF] text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      Previous
    </button>

    {getPageNumbers().map((page) => (
      <button
        key={page}
        onClick={() => setCurrentPage(page)}
        className={`px-4 py-2 text-sm font-medium rounded-lg transition ${
          currentPage === page
            ? "bg-[#37B5FF] text-white activepage"
            : "bg-gray-800 text-gray-400 hover:bg-[#37B5FF]/80 hover:text-white"
        }`}
      >
        {page}
      </button>
    ))}

    {totalPages > 5 && currentPage < totalPages - 2 && (
      <span className="px-2 text-gray-400">...</span>
    )}

    <button
      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
      disabled={currentPage === totalPages}
      className="px-4 py-2 bigbutton text-sm font-medium rounded-lg bg-[#37B5FF] text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
    >
      Next
    </button>
  </div>
</nav>

              </div>
            </div>
        </section>
</>
  )
}

export default RemindersPage
