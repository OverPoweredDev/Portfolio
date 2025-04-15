import React from "react";
import { useTranslation } from "react-i18next";

const toolsAndFrameworks = [
  { name: "React", level: 9 },
  { name: "Tailwind CSS", level: 9 },
  { name: "Flutter", level: 8 },
  { name: "Spring Boot", level: 8 },
  { name: "Node.js", level: 7 },
  { name: "Django", level: 6 },
  { name: "Flask", level: 6 },
  { name: "Bootstrap", level: 6 },
  { name: "jQuery", level: 5 },
  { name: "Git", level: 9 },
  { name: "Docker", level: 6 },
  { name: "Kubernetes", level: 5 },
  { name: "Postman", level: 7 },
  { name: "Jenkins", level: 5 },
  { name: "AWS", level: 4 },
  { name: "Google Cloud", level: 4 },
  { name: "Firebase", level: 6 },
  { name: "MongoDB", level: 7 },
  { name: "MySQL", level: 8 },
  { name: "SQLite", level: 7 },
];

const programmingLanguages = [
  { name: "Java", level: 9 },
  { name: "SQL", level: 9 },
  { name: "C++", level: 9 },
  { name: "Python", level: 8 },
  { name: "JavaScript", level: 8 },
  { name: "HTML", level: 7 },
  { name: "CSS", level: 7 },
  { name: "Bash", level: 7 },
  { name: "Dart", level: 6 },
  { name: "C", level: 5 },
  { name: "Go", level: 2 },
];

const technicalConcepts = [
  { name: "Data Structures", level: 9 },
  { name: "Algorithms", level: 9 },
  { name: "System Design", level: 8 },
  { name: "Machine Learning", level: 7 },
  { name: "Web Development", level: 8 },
  { name: "App Development", level: 6 },
  { name: "DevOps", level: 6 },
  { name: "Cloud Computing", level: 5 },
  { name: "DBMS", level: 8 },
  { name: "Version Control", level: 9 },
  { name: "Agile", level: 7 },
  { name: "Testing", level: 8 },
  { name: "CI & CD", level: 6 },
  { name: "API Development", level: 7 },
  { name: "Microservices", level: 6 },
  { name: "Data Analysis", level: 7 },
  { name: "Big Data", level: 5 },
  { name: "Deep Learning", level: 3 },
  { name: "Data Governance", level: 4 },
];

const getBar = (level) => {
  const total = 10;
  const filled = "█".repeat(level);
  const empty = "░".repeat(total - level);
  return filled + empty;
};

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div id="skills" className="mx-20 mb-24 mt-4 font-mono whitespace-nowrap">
      <div className="mb-6 text-3xl font-bold">{t("skills.tech-stack")}</div>

      <div className="mt-12 mb-4 text-md font-bold">
        {t("skills.tools-and-frameworks")}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
        {toolsAndFrameworks.slice(0, 6).map(
          (
            skill // Show only 6 skills on mobile
          ) => (
            <div key={skill.name} className="flex items-center">
              <span className="w-40">{skill.name}</span>
              <span>{getBar(skill.level)}</span>
            </div>
          )
        )}
        {toolsAndFrameworks.slice(6).map(
          (
            skill // Show remaining skills only on larger screens
          ) => (
            <div key={skill.name} className="hidden md:flex items-center">
              <span className="w-40">{skill.name}</span>
              <span>{getBar(skill.level)}</span>
            </div>
          )
        )}
      </div>

      <div className="mt-12 mb-4 text-md font-bold">
        {t("skills.programming-languages")}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
        {programmingLanguages.slice(0, 6).map(
          (
            skill // Show only 6 skills on mobile
          ) => (
            <div key={skill.name} className="flex items-center">
              <span className="w-40">{skill.name}</span>
              <span>{getBar(skill.level)}</span>
            </div>
          )
        )}
        {programmingLanguages.slice(6).map(
          (
            skill // Show remaining skills only on larger screens
          ) => (
            <div key={skill.name} className="hidden md:flex items-center">
              <span className="w-40">{skill.name}</span>
              <span>{getBar(skill.level)}</span>
            </div>
          )
        )}
      </div>

      <div className="mt-12 mb-4 text-md font-bold">
        {t("skills.technical-concepts")}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
        {technicalConcepts.slice(0, 6).map(
          (
            skill // Show only 6 skills on mobile
          ) => (
            <div key={skill.name} className="flex items-center">
              <span className="w-40">{skill.name}</span>
              <span>{getBar(skill.level)}</span>
            </div>
          )
        )}
        {technicalConcepts.slice(6).map(
          (
            skill // Show remaining skills only on larger screens
          ) => (
            <div key={skill.name} className="hidden md:flex items-center">
              <span className="w-40">{skill.name}</span>
              <span>{getBar(skill.level)}</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
