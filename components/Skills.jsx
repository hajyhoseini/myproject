const skills = [
  { name: "HTML", icon: "fab fa-html5 text-orange-500", level: 90 },
  { name: "CSS", icon: "fab fa-css3-alt text-blue-500", level: 80 },
  { name: "JavaScript", icon: "fab fa-js text-yellow-300", level: 85 },
  { name: "React", icon: "fab fa-react text-blue-500", level: 75 },
  { name: "Next.js", icon: "fas fa-layer-group text-yellow-400", level: 70 },
  { name: "Tailwind CSS", icon: "fas fa-wind text-blue-500", level: 80 },
  { name: "Bootstrap", icon: "fab fa-bootstrap text-green-500", level: 80 },
  { name: "GitHub", icon: "fab fa-github text-orange-500", level: 80 },
  { name: "Typing touch", icon: "fas fa-keyboard text-amber-300", level: 70 },
];

const Skills = () => (
  <section id="skills" className="relative rounded-lg p-5 w-full py-16 px-10 bg-gradient-to-r from-teal-500 via-green-400 to-blue-500 shadow-lg">
    {/* تایتل بخش مهارت‌ها */}
    <h3 className="bg-black/60 text-4xl font-extrabold text-center mb-12 text-white shadow-md py-3 px-8 rounded-lg">
      مهارت‌ها
    </h3>

    {/* لیست مهارت‌ها */}
    <div className="text-black bg-black/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 max-w-3xl mx-auto">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center text-center">
          {/* آیکون مهارت */}
          <i className={`${skill.icon} text-8xl mb-4 transition-transform transform hover:scale-110`}></i>

          {/* نام مهارت */}
          <p className="font-semibold text-xl text-white mb-4">{skill.name}</p>

          {/* نوار درجه مهارت */}
          <div className="w-full bg-white/20 rounded-full h-4 mt-2">
            <div
              className="bg-white h-4 rounded-full"
              style={{ width: `${(skill.level * 0.75)}%` }}  /* اندازه نوار درجه به سه چهارم کاهش یافت */
            ></div>
          </div>
          
          {/* درصد مهارت */}
          <div className="text-white text-lg mt-2">{skill.level}%</div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
