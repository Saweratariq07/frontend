
const User  = () => {
  return (
    <div>
      <div className="container mx-auto px-4 w-full">
              <form class="max-w-xl mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-6">Login Now</h2>
                  <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" for="email">
                    Email:
                  </label>
                      <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div class="mb-4">
                      <label className="block text-gray-700 font-bold mb-2" for="name">
                    Password:
                  </label>
                      <input className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter your Password" />
                  </div>
                  <div className="flex justify-center mt-5">
                    <button className="bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-semibold text-lg rounded-lg px-12 py-3 text-center dark:foucs:ring-yellow-900">Submit</button>
                </div>
              </form>     
      </div>
    </div>
  );
};

export default  User;
