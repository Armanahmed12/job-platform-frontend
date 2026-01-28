import {
  FaPenNib,
  FaBullhorn,
  FaUniversity,
  FaUsers,
  FaShoppingBag,
  FaChartLine,
  FaHeadset,
  FaCode,
  FaBriefcase,
  FaShieldAlt,
} from "react-icons/fa";

const categories = [
  {
    title: "Content Writer",
    jobs: "142 Jobs Available",
    icon: <FaPenNib />,
  },
  {
    title: "Marketing & Sale",
    jobs: "1526 Jobs Available",
    icon: <FaBullhorn />,
  },
  {
    title: "Finance",
    jobs: "168 Jobs Available",
    icon: <FaUniversity />,
  },
  {
    title: "Human Resource",
    jobs: "165 Jobs Available",
    icon: <FaUsers />,
  },
  {
    title: "Retail & Products",
    jobs: "563 Jobs Available",
    icon: <FaShoppingBag />,
  },
  {
    title: "Market Research",
    jobs: "532 Jobs Available",
    icon: <FaChartLine />,
  },
  {
    title: "Customer Help",
    jobs: "185 Jobs Available",
    icon: <FaHeadset />,
  },
  {
    title: "Software",
    jobs: "1856 Jobs Available",
    icon: <FaCode />,
  },
  {
    title: "Management",
    jobs: "965 Jobs Available",
    icon: <FaBriefcase />,
  },
  {
    title: "Security Analyst",
    jobs: "254 Jobs Available",
    icon: <FaShieldAlt />,
  },
];

const BrowseByCategory = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-base-content">
            Browse by category
          </h2>
          <p className="text-base-content/60 mt-2">
            Find the job that’s perfect for you. about 800+ new jobs everyday
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="card bg-base-100 border border-base-400 hover:border-primary hover:shadow-lg hover:bg-blue-50 transition-all cursor-pointer"
            >
              <div className="card-body items-center text-center p-6">
                <div className="text-3xl text-primary mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-base-content">
                  {item.title}
                </h3>
                <p className="text-sm text-base-content/60">
                  {item.jobs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
