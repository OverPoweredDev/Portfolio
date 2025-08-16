import { useState } from "react";
import TypewriterText from "./TypewriterText";

export default function TerminalEntry({
  title,
  description,
  tech,
  link,
  typing,
  onDone,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  // Steps: 0 = title, 1 = description, 2 = tech, 3 = link, 4 = done

  const handleStepComplete = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      onDone?.();
    }
  };

  // Helper function to render content based on step
  const renderContent = (step, content) => {
    if (currentStep < step) return null;
    if (currentStep === step) {
      return (
        <TypewriterText text={content} onDone={() => handleStepComplete()} />
      );
    }
    return content;
  };

  // If typing is disabled, render everything immediately
  if (!typing) {
    return (
      <div className="mb-8 text-sm font-mono text-black space-y-1">
        <div className="font-bold">{`> ${title}`}</div>
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
                [ view project in detail ]
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }

  // If typing is enabled, render content sequentially
  return (
    <div className="mb-8 text-sm font-mono text-black space-y-1">
      <div className="font-bold">
        {`> `}
        {renderContent(0, title)}
      </div>

      <div className="flex items-start pl-4">
        {currentStep >= 1 && <div className="min-w-[2rem]">└──</div>}
        <div className="pl-1">{renderContent(1, description)}</div>
      </div>

      <div className="flex items-start pl-4">
        {currentStep >= 2 && <div className="min-w-[2rem]">└──</div>}
        <div className="pl-1">{renderContent(2, "Tech: " + tech)}</div>
      </div>

      {link && (
        <div className="flex items-start pl-4">
          {currentStep >= 3 && <div className="min-w-[2rem]">└──</div>}
          <div className="pl-1">
            {currentStep === 3 ? (
              <TypewriterText
                text="[ view project in detail ]"
                onDone={() => handleStepComplete()}
              />
            ) : currentStep > 3 ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline"
              >
                [ view project in detail ]
              </a>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
