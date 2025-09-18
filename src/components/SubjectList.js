import React, { useEffect, useState } from "react";

function SubjectList() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("/json/subjects.json")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  return (
    <section id="subjects" className="p-10 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-2 uppercase">
        What is the course program?
      </h2>
      <p className="max-w-3xl mx-auto mb-8 text-gray-600">
        With a program design that includes 06 semesters with many important
        technologies such as ReactJS, PHP, Python, .NET Core, Spring Boot,
        students are trained to become confident programmers. After graduation,
        students are confident in front of employers with 4 great semesters with
        quality, practical products, students will definitely score points.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {subjects.map((subj) => (
          <div
            key={subj.id}
            className="flex flex-col items-center justify-center text-center p-4"
          >
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 shadow-md mb-3">
              <img
                src={subj.image}
                alt={subj.subject}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="font-semibold text-lg">{subj.subject}</h3>
          </div>

        ))}
      </div>
    </section>
  );

}

export default SubjectList;
