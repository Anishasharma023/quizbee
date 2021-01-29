 const qBank = [
    {
        question : "What does PHP stand for?",
        answer : ["PHP Hypertex Processor", "PHP Hyper Markup Processor", "PHP Hyper Markup Preprocessor", "PHP Hypertext Preprocessor"],
        correct : "PHP Hypertext Preprocessor",
        questionId : "001"
    },

    {
        question : "Who is known as the father of PHP?",
        answer : ["Rasmus Lerdorf", "Willam Makepiece", "Drek Kolkevi", "List Barely"],
        correct : "Rasmus Lerdorf",
        questionId : "002"
    },

    {
        question : "Which of the following method sends input to a script via a URL?",
        answer : ["Get", "Post", "Both", "None"],
        correct : "Both",
        questionId : "003"
    },

    {
        question : "What is ReactJS?",
        answer : ["Server-side Framework", "User-interface framework", "Both", "None"],
        correct : "Both",
        questionId : "004"
    },

    {
        question : "How can you access the state of a component from inside of a member function?",
        answer : ["this.getState()", "this.prototype.Value", "this.state", "this.values"],
        correct : "this.state",
        questionId : "005"
    },

    {
        question : "Which of the following API is a MUST for every ReactJS component?",
        answer : ["getInitialState", "render", "renderComponent", "None"],
        correct : "renderComponent",
        questionId : "006"
    },

    {
        question : "At the highest level, React components have lifecycle events that fall into",
        answer : ["Initialization", "State/Property Updates", "Destruction", "All of these"],
        correct : "All of these",
        questionId : "007"
    },

    {
        question : "React is a ________",
        answer : ["Javascript library", "Javascript framework", "Both of above", "None of above"],
        correct : "Javascript library",
        questionId : "008"
    },

    {
        question : "ReactJS uses _____ to increase performance",
        answer : ["Virtual DOM", "Original DOM", "Both of above", "None of above"],
        correct : "Virtual DOM",
        questionId : "009"
    },

    {
        question : "props in react can________",
        answer : ["Be changed inside the component", "Not be changed in the component", "Be changed in side other component", "None of above"],
        correct : "Not be changed in the component",
        questionId : "010"
    },

    {
        question : "componentDidMount lifecycle method is called when____",
        answer : ["Component is created for the first time", "Component is updated", "Both of above", "None of above"],
        correct : "Component is created for the first time",
        questionId : "011"
    },

    {
        question : "Everything in react is __________",
        answer : ["Module", "Component", "Package", "Class"],
        correct : "Component",
        questionId : "012"
    },

    {
        question : "How many elements does a react component returns?",
        answer : ["1", "0", "Multiple elements with one root element", "None of above"],
        correct : "Multiple elements with one root element",
        questionId : "013"
    },

    {
        question : "In React, Babel is a __________",
        answer : ["interpreter", "compiler", "transpiler", "None of above"],
        correct : "compiler",
        questionId : "014"
    },

    {
        question : "React Js is developed by",
        answer : ["Google", "Microsoft", "Facebook", "None of above"],
        correct : "Facebook",
        questionId : "015"
    },

    {
        question : "If JSX is used in React Js components then which of the following statements are true?",
        answer : ["JSX is compiled into HTML", "JSX is compiled in calls of React.createElement", "Both of above", "None of above"],
        correct : "JSX is compiled in calls of React.createElement",
        questionId : "016"
    },

    {
        question : "To update state in react forcefully, which method is used",
        answer : ["setState", "forceUpdate", "Both of above", "None of above"],
        correct : "setState",
        questionId : "017"
    },
];

export default(n=5) => 
Promise.resolve(qBank.sort( () => 0.5-Math.random()) .slice(0, n));
