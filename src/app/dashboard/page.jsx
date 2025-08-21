import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to your dashboard! Please select your role to continue:
        </p>
        <div className="flex flex-col space-y-4">
          <Link href="/dashboard/admin" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200">
            Admin Dashboard
          </Link>
          <Link href="/dashboard/member" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200">
            Member Dashboard
          </Link>
          <Link href="/dashboard/user" className="px-6 py-3 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition duration-200">
            User Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
