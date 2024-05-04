### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

  It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL

- What is a single page application?

  A single-page application is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.

- What are some differences between client side and server side routing?

  Server-side routing relies on the server, while client-side routing empowers the client's browser. Server-side routing may be less responsive with potential delays during transitions while client-side routing offers a more responsive user experience with seamless transitions. Server-side routing is simpler to implement with minimal client-side scripting while client-side routing can be more complex, supporting dynamic user interfaces.

- What are two ways of handling redirects with React Router? When would you use each?

  Two ways of handling redirects are by using the Navigate component, or the useNavigate hook. The Navigate component is useful when a user tries to access a resource they shouldn't have access to, and we want to turn them away. This also omits the failed attempt from the browser history. The useNavigate hook is useful when we want to send a user to some resource after some successful interaction, like registering as a user, or logging in. This method keeps the browser history current, allowing the user to navigate back to the original resource if they choose.

- What are two different ways to handle page-not-found user experiences using React Router?

  We can add a route to the end of our routes that will display a "Not Found" component. We could also use the Redirect component in the same fashion, though we could redirect the user back to the home page instead of displaying a not found page.

- How do you grab URL parameters from within a component using React Router?

  We use the useParams hook

- What is context in React? When would you use it?

  Context is a way to pass data down through a component tree without having to pass props down through every level. We may want to use it for storing user credentials after authentication, managing interface appearance according to user preference, or managing language preferences.

- Describe some differences between class-based components and function
  components in React.

  A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX), there is no render method used, and hooks can be easily used in functional components. A class component requires you to extend from React. Component and create a render function that returns a React element, it must have the render() method returning JSX, and it requires different syntax inside a class component to implement hooks.

- What are some of the problems that hooks were designed to solve?

  Reusing stateful logic between components, simplifying code and components, and in general optimization of React development.
