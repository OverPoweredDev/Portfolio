export default function TerminalWindow({ children }) {
  return (
    <div className="bg-white border-2 border-light-terminal dark:border-dark-terminal rounded-lg max-w-6xl mx-auto sm:mt-16 overflow-hidden">
      <div className="bg-light-terminal dark:bg-dark-terminal text-white px-4 py-2 flex items-center justify-start space-x-2 text-sm font-mono">
        <span className="hidden sm:block w-3 h-3 bg-white rounded-full"></span>
        <span className="hidden sm:block w-3 h-3 bg-white rounded-full"></span>
        <span className="hidden sm:block w-3 h-3 bg-white rounded-full"></span>
        <span className="sm:ml-6 sm:pl-4 font-bold">
          projects@omkarprabhune.com:~
        </span>
      </div>
      <div className="p-6 bg-white font-mono text-black">{children}</div>
    </div>
  );
}
