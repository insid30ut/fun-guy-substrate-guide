
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Mushroom Cultivation",
    excerpt: "Learn the basics of mushroom cultivation, from choosing species to harvesting your first flush.",
    date: "May 15, 2023",
    readTime: "7 min read",
    category: "Beginners",
  },
  {
    id: 2,
    title: "Advanced Substrate Formulations",
    excerpt: "Take your cultivation to the next level with these specialized substrate recipes for gourmet mushrooms.",
    date: "June 2, 2023",
    readTime: "10 min read",
    category: "Advanced",
  },
  {
    id: 3,
    title: "Common Contamination Issues and How to Solve Them",
    excerpt: "Identify and address the most common contamination problems in mushroom cultivation.",
    date: "June 18, 2023",
    readTime: "8 min read",
    category: "Troubleshooting",
  }
];

const BlogPreview = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-mushroom-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mushroom-800">Latest from the Blog</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover tips, techniques, and insights from our mushroom cultivation experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-mushroom-100 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-mushroom-100 to-forest-100 flex items-center justify-center">
                <span className="text-6xl">🍄</span>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-forest-100 text-forest-700 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.date} • {post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-mushroom-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-5">{post.excerpt}</p>
                
                <a 
                  href="#" 
                  className="text-forest-600 hover:text-forest-700 font-medium inline-flex items-center"
                >
                  Read More
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button 
            variant="outline" 
            className="border-mushroom-500 text-mushroom-700 hover:bg-mushroom-50"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
