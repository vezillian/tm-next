export default function Blog() {
    const blogPosts = [
      { title: 'Getting Started with Next.js', date: 'April 1, 2024' },
      { title: 'The Power of Tailwind CSS', date: 'April 5, 2024' },
      { title: 'Building Responsive Layouts', date: 'April 10, 2024' },
    ];
  
    return (
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.date}</p>
              <a href="#" className="mt-4 inline-block text-blue-500 hover:underline">Read more</a>
            </div>
          ))}
        </div>
      </div>
    );
  }