const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-12 h-32">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <div className="uppercase text-sm tracking-wider">Jacob Liberty</div>
        </div>
        <div>       
          <ul className="text-gray-500 text-sm">
            <li>
              <a href="https://reactbricks.com" className=" hover:text-sky-600">
                React Bricks
              </a>
            </li>
            <li>
              <a href="https://nextjs.org" className=" hover:text-sky-600">
                Next.js
              </a>
            </li>
            <li>
              <a href="https://tailwindcss.com" className="hover:text-sky-600">
                Tailwind CSS
              </a>
            </li>
            </ul>            
        </div>

      </div>
    </footer>
  )
}

export default Footer
