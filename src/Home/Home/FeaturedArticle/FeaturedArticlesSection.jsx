

const FeaturedArticlesSection = () => {
  // Dummy data for featured articles
  const featuredArticles = [
    {
      id: 1,
      title: 'The Power of Positive Thinking',
      image: 'https://i.ibb.co/c8MCZKc/111895-OO950-W-889.jpg',
      category: 'Self Improvement',
    },
    {
      id: 2,
      title: 'Unlocking Creativity: A Journey Within',
      image: 'https://i.ibb.co/160CyYJ/motivational-composition-goal-achievement.jpg',
      category: 'Art & Design',
    },
    {
      id: 3,
      title: 'Tech Innovations Shaping the Future',
      image: 'https://i.ibb.co/X7pX0dC/thumb-gettyimages-829563232.webp',
      category: 'Technology',
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center underline  ">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article) => (
            <div key={article.id} className="bg-white p-6 rounded-md shadow-md">
              <img src={article.image} alt={article.title} className="mb-4 rounded-md" />
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600  underline ">{article.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticlesSection;
