'use client'
import Image from "next/image";
import Card from "./exclude/card";

export default function RootPage() {

  const data = [
    [
      { "name": "Alias", "description": "A small discord bot" },
      { "name": "DevSpace", "description": "A VScode extension" },
    ],
    [
      { "name": "HTML", "type": "language" },
      { "name": "CSS", "type": "language" },
      { "name": "JavaScript", "type": "language" },
      { "name": "TypeScript", "type": "language" },
      { "name": "React", "type": "language" },
      { "name": "Python", "type": "language" },
      { "name": "Java", "type": "language" },
      { "name": "C", "type": "language" },
      { "name": "C++", "type": "language" },
      { "name": "Node.js", "type": "work" },
      { "name": "Next.js", "type": "work" },
      { "name": "Angular.js", "type": "work" },
      { "name": "Discord.js", "type": "api" },
      { "name": "Firebase", "type": "api" },
      { "name": "VSCode", "type": "ide" },
      { "name": "IntelliJ IDEA", "type": "ide" },
      { "name": "PyCharm", "type": "ide" },
      { "name": "CLion", "type": "ide" },
      { "name": "Eclipse", "type": "ide" },
      { "name": "VSCode", "type": "ide" },
      { "name": "Github", "type": "other" },
      { "name": "Git", "type": "other" },
      { "name": "NPM.js", "type": "other" },
    ]
  ]

  return (
    <>
      <div>Hello</div>
    </>
  );
}
