import { h } from "preact";
import DefaultLayout from "../layouts/default";
// export const meta = [{
//     name: 'description',
//     content: ''
// }];
const HomePage = (props) => {
  console.log(props);

  return (
    <DefaultLayout section={"Home"}>
      <a href="/contact">To contact</a>
    </DefaultLayout>
  );
};
export default HomePage;
