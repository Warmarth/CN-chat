// import { useContext } from 'react';
// import { themeContext } from './theme';

// const Render = () => {
//   const [theme, setTheme] = useContext(themeContext);
//   return (
//     <div>
//       <button className={`btn ${theme ? 'btn-primary' : 'btn-secondary'}  `} onClick={() => setTheme((r) => !r)}>
//         change theme
//       </button>
//     </div>
//   );
// };
// export default Render;
const course = [
  {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2,
      },
    ],
  },
];
{
}
export function RenderCourse({ course }) {
  let { id, name: title, parts } = course;
  let total = parts.reduce((accumulato, value) => {
    accumulato += value.exercises;
    return accumulato;
  }, 0);

  return (
    <div key={id} className="space-y-2 mb-2 text-left ">
      <h2 className="font-bold">{title}</h2>
      <div>
        {parts.map((part) => (
          <div key={part.id} className="space-x-2 ">
            <span>{part.name}</span>
            <span>{part.exercises}</span>
          </div>
        ))}
      </div>
      <p className="font-bold">{`total of : ${total} execises`}</p>
    </div>
  );
}

export function Displayer() {
  return (
    <div>
      <h1 className="font-extrabold text-left mb-3">web development curriculum</h1>
      {course.map((x, y) => (
        <RenderCourse course={x} key={y} />
      ))}
    </div>
  );
}
