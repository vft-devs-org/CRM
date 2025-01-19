import Layout from "../components/Layout";
import { useRoutes } from "react-router-dom";
import HomePage from "../components/HomePage";

const Section = () => {
  return (
    <div>
      <h1>Section</h1>
    </div>
  );
};

const ProjectRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/Section",
          element: <Section />,
        },
      ],
    },
  ]);

  return element;
};

export default ProjectRoutes;
