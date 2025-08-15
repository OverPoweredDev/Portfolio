import { useTranslation } from "react-i18next";
import { timelineData } from "../../data/Timeline";

export default function Timeline() {
  const { t } = useTranslation("timeline");

  return (
    <section
      id="timeline"
      className="mt-4 relative font-mono max-w-screen overflow-hidden"
    >
      <div className="relative flex flex-col items-start">
        <div className="flex items-start">
          <div
            title="left-entry-line"
            className="absolute md:-left-[5rem] h-[2px] w-[2px] md:w-[calc(5rem+10rem-2rem+2px)] bg-light-text dark:bg-dark-text"
          />
          <div
            title="left-line-bend"
            className="absolute left-[2px] md:left-[calc(10rem-2rem+2px)] w-[2rem] h-[2rem] border-t-2 border-r-2 border-light-text dark:border-dark-text rounded-tr-full"
          />
        </div>

        <div
          title="vertical-line"
          className="ml-[2rem] md:ml-[10rem] mt-[2rem] border-l-2 border-light-text dark:border-dark-text pt-8"
        >
          {timelineData.map((item, idx) => (
            <article key={idx} className="relative mb-10 mr-8">
              <div
                title="timeline-dot"
                className="absolute -left-[7px] top-1 w-[12px] h-[12px] border-2 border-light-text dark:border-dark-text bg-light-bg dark:bg-dark-bg rounded-full"
              />
              <div
                title="blinking-timeline-dot"
                className={`absolute -left-[7px] top-1 w-[12px] h-[12px] border-2 border-light-text dark:border-dark-text bg-dark-bg dark:bg-light-bg rounded-full ${
                  idx === 0 ? "animate-blink" : "hidden"
                }`}
              />
              <div className="ml-8">
                <h3 className="font-bold text-base">{t(item.title)}</h3>
                <p className="text-sm opacity-80">{t(item.location)}</p>
                <p className="text-sm opacity-60 italic">{t(item.date)}</p>
                <p className="mt-2 text-sm max-w-5xl">{t(item.description)}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-end mt-0 ml-[2rem] md:ml-[10rem] mb-16">
          <div className="w-[2rem] h-[2rem] border-b-2 border-l-2 border-light-text dark:border-dark-text rounded-bl-full" />
          <div className="h-[2px] w-[calc(100vw-2rem)] md:w-[calc(100vw-10rem-2rem)] bg-light-text dark:bg-dark-text" />
        </div>
      </div>
    </section>
  );
}
