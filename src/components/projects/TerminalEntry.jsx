export default function TerminalEntry({ title, description, tech, link }) {
  return (
    <div className="mb-8 text-sm font-mono text-black space-y-1">
      <div>{`> ${title}`}</div>

      <div className="flex items-start pl-4">
        <div className="min-w-[2rem]">└──</div>
        <div className="pl-1">{description}</div>
      </div>

      <div className="flex items-start pl-4">
        <div className="min-w-[2rem]">└──</div>
        <div className="pl-1">Tech: {tech}</div>
      </div>

      {link && (
        <div className="flex items-start pl-4">
          <div className="min-w-[2rem]">└──</div>
          <div className="pl-1">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:underline"
            >
              [ view project ]
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
