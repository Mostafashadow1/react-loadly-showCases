export function WhyUseLibrarySection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Why Use React Loaders Kit?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Save time and enhance user experience with our beautifully crafted
            loading components
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Boost Development Speed
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implement beautiful loading states in minutes, not hours. No
                more wrestling with CSS animations.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Consistent Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All loaders follow the same design principles, ensuring a
                cohesive experience across your application.
              </p>
            </div>

            <div className="p-6">
              <div className="w-16 h-16 rounded-full bg-pink-100 dark:bg-pink-900/20 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-pink-600 dark:text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                Delight Users
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Beautiful loaders reduce perceived loading times and create a
                premium experience for your users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}