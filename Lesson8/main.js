let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// coursesAndDurationArray.map((item, index) => ({id: index + 1, ...item}));
let mapCourse = coursesAndDurationArray.map((course, index) => ({ id: index + 1, ...course }));
console.log(mapCourse)