export function FooterSection() {
  return (
    <footer className="py-12 bg-gray-900 text-gray-400">
      <div className="mt-8 pt-8 border-t border-gray-800 text-center">
        <p>
          © {new Date().getFullYear()} React Loaders Kit. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
