const { h } = require("preact");
import DefaultLayout from "../layouts/default";

export default (props) => {
  console.log(props);
  return (
    <DefaultLayout section={"Contact"}>
      <a href="/">Back home</a>
    </DefaultLayout>
  );
};
