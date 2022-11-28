import Form from "../components/Exercise/Form";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronDown, faChevronUp, faFloppyDisk, faXmark} from "@fortawesome/free-solid-svg-icons";
import { action } from "@storybook/addon-actions";
library.add(faFloppyDisk, faXmark, faChevronUp, faChevronDown);


export default {
  component: Form,
  title: "Exercise - Form",
};

const Template = (args) => <Form {...args} />;

export const SetsPrepopulated = Template.bind({})
SetsPrepopulated.args = {
  name: "Barbell Curl",
  category: "Arms",
  reps: 8,
  sets: 4,
  gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0031.gif",
  note: "Please choose a weight such that you are close to failure at the end of each set",
  onConfirm: action("ON CONFIRM CLICKED"),
  onCancel: action("ON CANCEL CLICKED"),
  onReorder: action("ON REORDER CLICKED")
};

export const TimedPrepopulated = Template.bind({});
TimedPrepopulated.args = {
  name: "Running",
  category: "cardio",
  duration: 300,
  note: "Please choose a weight such that you are close to failure at the end of each set",
  onConfirm: action("ON CONFIRM CLICKED"),
  onCancel: action("ON CANCEL CLICKED"),
  onReorder: action("ON REORDER CLICKED")
};

export const NotPrepopulated = Template.bind({});
NotPrepopulated.args = {
  gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0031.gif",
  name: "Barbell Curl",
  category: "arms",
  onConfirm: action("ON CONFIRM CLICKED"),
  onCancel: action("ON CANCEL CLICKED"),
  onReorder: action("ON REORDER CLICKED")
};
