const fixtures = {
  workouts: [
    {
      id: 1,
      name: "Leg Day",
      category_counts: { Legs: 6 },
      first_gif: "http://d205bpvrqc9yn1.cloudfront.net/0032.gif",
      owner: { id: 1, name: "John" }
    },
    {
      id: 2,
      name: "Cardio",
      category_counts: { cardio: 4, rest: 4 },
      first_gif: "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
      owner: { id: 2, name: "Jane" }
    }],
  workout: {
    id: 2,
    name: "Cardio",
    category_counts: { cardio: 4, rest: 4 },
    first_gif: "http://d205bpvrqc9yn1.cloudfront.net/3220.gif",
    owner: { id: 2, name: "Jane" },
    workout_exercises: [
      {
        "id": 1,
        "exercise_id": 8,
        "reps": 8,
        "sets": 3,
        "duration": null,
        "note": "Last set to failure",
        "exercise": {
          "id": 8,
          "user_id": null,
          "name": "Deadlift",
          "category": "legs",
          "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0032.gif"
        }
      },
      {
        "id": 2,
        "exercise_id": 9,
        "reps": 8,
        "sets": 3,
        "duration": null,
        "note": "Last set to failure",
        "exercise": {
          "id": 9,
          "user_id": null,
          "name": "Lunge",
          "category": "legs",
          "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0336.gif"
        }
      },
      {
        "id": 3,
        "exercise_id": 10,
        "reps": 8,
        "sets": 3,
        "duration": null,
        "note": "Last set to failure",
        "exercise": {
          "id": 10,
          "user_id": null,
          "name": "Calf Raise",
          "category": "legs",
          "gif_url": "http://d205bpvrqc9yn1.cloudfront.net/0417.gif"
        }
      }
    ]
  }
};

const response = { //do I need to name this object?
  get: jest.fn(url => {
    if (url === "/api/workouts?user=1") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.workouts
      });
    }
    if (url === "/api/workouts/1") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.workout
      });
    }
  }),
  put: jest.fn(() => {
    return Promise.resolve({
      status: 204,
      statusText: "No Content"
    })
  }),
  delete: jest.fn(() => {
    return Promise.resolve({
      status: 204,
      statusText: "No Content"
    })
  })
};
export default response