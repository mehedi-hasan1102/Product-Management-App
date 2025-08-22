E-commerce Product Management

A Next.js application for managing products, featuring user authentication, product listing, and administrative functionalities.

## Features

*   User Authentication (Login, Register)
*   Product Listing (All Products, Individual Product Pages)
*   Product Management (Add Product, Edit Product, My Products)
*   API Endpoints for Products and Authentication

## Technologies Used

*   **Framework:** Next.js (React Framework)
*   **Database:** MongoDB
*   **Authentication:** NextAuth.js
*   **Styling:** Tailwind CSS
*   **UI Components:** DaisyUI
*   **HTTP Client:** Axios
*   **Password Hashing:** Bcrypt
*   **Animation:** Framer Motion
*   **Form Management:** React Hook Form
*   **Icons:** React Icons
*   **Charting:** Recharts
*   **Alerts:** SweetAlert2

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

*   Node.js (LTS version recommended)
*   npm (Node Package Manager) or Yarn
*   A running MongoDB instance (local or cloud-based like MongoDB Atlas)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd scic-task
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    # yarn install
    ```

### Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
NEXTAUTH_SECRET=a_long_random_string_for_nextauth_security
NEXTAUTH_URL=http://localhost:3000
```

*   Replace `your_mongodb_connection_string` with your MongoDB connection URI.
*   Replace `your_database_name` with the name of your database.
*   Generate a strong, random string for `NEXTAUTH_SECRET`. You can use `openssl rand -base64 32` in your terminal.
*   `NEXTAUTH_URL` should be your application's URL (e.g., `http://localhost:3000` for local development, or your deployed URL).

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
# yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project can be easily deployed to platforms like Netlify or Vercel. Ensure you configure the environment variables (`MONGODB_URI`, `DB_NAME`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`) in your deployment settings.

For Netlify, the recommended build command is `next build` and the publish directory is `.next`.

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

[Specify your license here, e.g., MIT License]