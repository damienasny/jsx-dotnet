import { h } from "preact";
import DefaultLayout from "../layouts/default";
import ExampleNavigation from "../components/example-navigation";
import ExampleNavigationItem from "../components/example-navigation-item";
// export const meta = [{
//     name: 'description',
//     content: ''
// }];

const HomePage = (props) => {
  console.log(props);

  return (
    <DefaultLayout section={"Home"}>
      <ExampleNavigation>
        <ExampleNavigationItem href="/">Home</ExampleNavigationItem>
        <ExampleNavigationItem href="/contact">Contact</ExampleNavigationItem>
      </ExampleNavigation>
    </DefaultLayout>
  );
};
export default HomePage;
