const UserDashboardPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">User Dashboard</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome, User! Here you can view your profile and activity.
        </p>
        <p className="text-md text-gray-500">
          Your personalized space.
        </p>
      </div>
    </div>
  );
};

export default UserDashboardPage;
