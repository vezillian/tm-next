export default function Login() {
    return (
      <div className="container mx-auto py-20">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
              <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring">
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }