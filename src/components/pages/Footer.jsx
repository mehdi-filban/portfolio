export default function Footer() {
  return (
    <footer
      role='contentinfo'
      className='border-t border-black/5 bg-white/70 backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-zinc-950/70'
    >
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left'>
          <div>
            <p className='text-sm font-bold text-gray-900 dark:text-white'>
              Mehdi Filban
            </p>

            <p className='mt-1 text-xs font-semibold text-gray-500 dark:text-zinc-400'>
              Front-End Engineer • React & Next.js Developer
            </p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-gray-600 dark:text-zinc-300'>
            <a
              href={`${import.meta.env.BASE_URL}assets/Mehdi-Filban-Resume.pdf`}
              className='transition hover:text-[#009689] dark:hover:text-[#2dd4bf]'
              download
            >
              Resume
            </a>

            <span className='text-gray-300 dark:text-white/20'>/</span>

            <a
              href='https://github.com/mehdi-filban'
              target='_blank'
              rel='noreferrer'
              className='transition hover:text-[#009689] dark:hover:text-[#2dd4bf]'
            >
              GitHub
            </a>

            <span className='text-gray-300 dark:text-white/20'>/</span>

            <a
              href='https://linkedin.com/in/mehdi-filban'
              target='_blank'
              rel='noreferrer'
              className='transition hover:text-[#009689] dark:hover:text-[#2dd4bf]'
            >
              LinkedIn
            </a>
          </div>

          <p className='text-xs font-semibold text-gray-500 dark:text-zinc-400'>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
