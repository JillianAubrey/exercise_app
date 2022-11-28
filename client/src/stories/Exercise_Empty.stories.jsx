import Empty from "../components/Exercise/Empty";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { action } from "@storybook/addon-actions";
library.add(faCirclePlus);

export default {
  component: Empty,
  title: "Exercise -- Empty",
};

const Template = (args) => <Empty {...args} />;

export const EmptyDefault = Template.bind({});
EmptyDefault.args = {
  onClick: action("on click action!")
};

