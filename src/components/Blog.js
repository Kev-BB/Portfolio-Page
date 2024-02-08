const posts = [
  {
    id: 1,
    title: "The Journey of Becoming a Web Developer",
    href: "https://medium.com/@Kev-BB/the-journey-of-becoming-a-web-developer-db07d6d50a73",
    description:
      "During the pandemic, while spending most of my time at home, I felt the urge to change my life’s direction. It may sound a bit dramatic, but that’s how I felt...",
    date: "Sep 22, 2023",
    datetime: "2020-03-16",
    category: { title: "StoryOfMyLife", href: "#" },
    author: {
      name: "@Kev-BB",
      role: "Junior Front-End Developer",
      href: "https://medium.com/@Kev-BB",
      imageUrl: "avatartion.png",
    },
  },
  {
    id: 2,
    title: "JavaScript: Understanding Values and Variables",
    href: "https://medium.com/@Kev-BB/javascript-understanding-values-and-variables-59de00643d61",
    description:
      "JavaScript is one of the most popular programming languages used today. One of the core concepts in JavaScript is using values and variables. Understanding how these work is crucial for any JavaScript developer...",
    date: "OCT 3, 2023",
    datetime: "2020-03-16",
    category: { title: "JavaScript", href: "#" },
    author: {
      name: "@Kev-BB",
      role: "Junior Front-End Developer",
      href: "https://medium.com/@Kev-BB",
      imageUrl: "avatartion.png",
    },
  },
  {
    id: 3,
    title: "What Is The Document Object Model (DOM)?",
    href: "https://medium.com/@Kev-BB/what-is-the-document-object-model-dom-e0030a0dae43",
    description:
      "The Document Object Model (DOM) is a programming interface that allows programs to modify the structure, style, and content of web documents. It represents the document as a series of nodes and objects, enabling programming languages to interact with the page...",
    date: "NOV 6, 2023",
    datetime: "2020-03-16",
    category: { title: "Programming", href: "#" },
    author: {
      name: "@Kev-BB",
      role: "Junior Front-End Developer",
      href: "https://medium.com/@Kev-BB",
      imageUrl: "avatartion.png",
    },
  },

  // More posts...
];

export default function Blog() {
  return (
    <div id="Blog" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Where I Share My Passion and Tips
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
