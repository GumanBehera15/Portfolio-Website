import { GraduationCap } from "lucide-react";

function EducationCard({ title, college, year, description }) {
  return (
    <div
      className="
        relative rounded-xl border border-blue-400/30
        bg-gradient-to-br from-blue-500 via-blue-700 to-[#081a2f]
        p-7 shadow-lg transition-all duration-500
        hover:-translate-y-2 hover:shadow-blue-900/50
      "
    >
      <div className="flex flex-col gap-5">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full 
          bg-blue-300/20 
          flex items-center justify-center">
          <GraduationCap className="w-8 h-8 text-blue-200" />
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">
            {title}
          </h3>

          <p className="text-blue-200 font-semibold">
            {college}
          </p>

          <p className="text-sm text-blue-100/70">
            {year}
          </p>

          <p className="text-blue-100/80 leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    
    <div className="max-w-6xl mx-auto px-4">
      <br/>
      <br/>
      <br/>
    <h2 className="text-heading mb-10 text-center">My Educational Background</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <EducationCard
          title="Secondary Education (X)"
          college="Holy Cross High School, Mumbai"
          year="2021"
          description="Built strong fundamentals in science, logical reasoning, and problem-solving."
        />

        <EducationCard
          title="Higher Secondary Education (XII)"
          college="S.K Somaiya College, Mumbai"
          year="2021 – 2023"
          description="Completed higher secondary education with a strong foundation in mathematics and computer science."
        />

        <EducationCard
          title="B.Tech in Artificial Intelligence & Data Science"
          college="Shah And Anchor Kutchhi Engineering College"
          year="2023 – 2027"
          description="Focused on machine learning, deep learning, data analytics, and intelligent systems development."
        />

      </div>
    </div>
  );
}

