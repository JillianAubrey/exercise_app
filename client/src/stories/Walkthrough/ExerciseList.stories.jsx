import React from 'react'

import { action } from "@storybook/addon-actions"
import "../../helpers/fontAwesomeLibrary";
import ExerciseList from '../../components/Walkthrough/ExerciseList';
import "../../components/Walkthrough/Walkthrough.scss"


export default {
  component: ExerciseList,
  title: 'Walkthrough Exercise List'
}

const Template = args => <ExerciseList {...args} />

export const RepsBasedOnly = Template.bind({});
RepsBasedOnly.args = {
  onComplete: action("walkthrough complete"),
	exerciseList: [
		{ id: 1, reps: 8, sets: 3, duration: null, note: null, exercise: { id: 8, user_id: null, name: "deadlift", category: "legs", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0032.gif" } },
		{ id: 2, reps: 8, sets: 3, duration: null, note: null, exercise: { id: 9, user_id: null, name: "lunge", category: "legs", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0336.gif" } },
		{ id: 3, reps: 8, sets: 3, duration: null, note: null, exercise: { id: 10, user_id: null, name: "calf raise", category: "legs", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0417.gif" } }
	]
}

export const TimeBasedOnly = Template.bind({});
TimeBasedOnly.args = {
  onComplete: action("walkthrough complete"),
	exerciseList: [
		{ id: 15, reps: null, sets: null, duration: 30, note: null, exercise: { id: 30, user_id: 1, name: "water break", category: "rest", gif_url: null } },
		{ id: 16, reps: null, sets: null, duration: 30, note: null, exercise: { id: 31, user_id: 1, name: "forward fold", category: "stretch", gif_url: null } },
		{ id: 17, reps: null, sets: null, duration: 30, note: null, exercise: { id: 32, user_id: 1, name: "bent over twist", category: "stretch", gif_url: "https://www.spotebi.com/wp-content/uploads/2015/02/bent-over-twist-exercise-illustration.gif" } }
	]
}

export const IncludesRest = Template.bind({});
IncludesRest.args = {
  onComplete: action("walkthrough complete"),
	exerciseList: [
		{ id: 7, reps: null, sets: null, duration: 300, note: null, exercise: { id: 14, user_id: null, name: "jumping jack", category: "cardio", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/3220.gif" } },
		{ id: 8, reps: null, sets: null, duration: 30, note: null, exercise: { id: 1, user_id: null, name: "rest", category: "rest", gif_url: null } },
		{ id: 9, reps: null, sets: null, duration: 300, note: null, exercise: { id: 15, user_id: null, name: "burpee", category: "cardio", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/1160.gif" } }
	]
}

export const AllTogether = Template.bind({});
AllTogether.args = {
  onComplete: action("walkthrough complete"),
	exerciseList: [
		{ id: 18, reps: 10, sets: 3, duration: null, note: null, exercise: { id: 2, user_id: null, name: "push-up", category: "chest", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0662.gif" } },
		{ id: 19, reps: null, sets: null, duration: 60, note: null, exercise: { id: 3, user_id: null, name: "bench press", category: "chest", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0025.gif" } },
		{ id: 20, reps: null, sets: null, duration: 30, note: null, exercise: { id: 1, user_id: null, name: "rest", category: "rest", gif_url: null } }
	]
}

export const AllTogetherWithNotes = Template.bind({});
AllTogetherWithNotes.args = {
  onComplete: action("walkthrough complete"),
	exerciseList: [
		{ id: 18, reps: 10, sets: 3, duration: null, note: "Last set go to failure", exercise: { id: 2, user_id: null, name: "push-up", category: "chest", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0662.gif" } },
		{ id: 19, reps: null, sets: null, duration: 60, note: "As many reps as possible in the time limit", exercise: { id: 3, user_id: null, name: "bench press", category: "chest", gif_url: "http://d205bpvrqc9yn1.cloudfront.net/0025.gif" } },
		{ id: 20, reps: null, sets: null, duration: 30, note: "Drink lots of water", exercise: { id: 1, user_id: null, name: "rest", category: "rest", gif_url: null } }
	]
}