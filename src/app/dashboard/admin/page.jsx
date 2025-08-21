const AdminDashboardPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome, Admin! Here you can manage all aspects of the application.
        </p>
        <p className="text-md text-gray-500">
          Full control at your fingertips.
        </p>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
