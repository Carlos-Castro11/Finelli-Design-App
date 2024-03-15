/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useRouter } from "next/navigation";

// Data
import { ProjectsData } from "@/Database/Projects";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();

  React.useEffect(() => {
    ParseStringToInt(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ParseStringToInt = (value: string) => {
    var numberValue = Number(value);
    if (Number.isNaN(numberValue)) {
      router.push("/");
    }
    return numberValue;
  };

  return (
    <>
      {Number(params.id) > ProjectsData.length ? (
        router.push("/")
      ) : (
        <>
          {ProjectsData.map((project) => (
            <main className="" key={project.id}>
              {Number(params.id) == project.id ? (
                <>
                  <h1>{project.title}</h1>
                  <img src={`/images${project.image}`} alt="" />
                </>
              ) : null}
            </main>
          ))}
        </>
      )}
    </>
  );
}
