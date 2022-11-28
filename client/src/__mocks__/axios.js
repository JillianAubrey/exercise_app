const fixtures = {
  workouts: {
    "1": {
      id: 1, exercises: [
        { exercise_id: 6, reps: 8, sets: 3 },
        { exercise_id: 7, reps: 8, sets: 3 },
        { exercise_id: 8, reps: 8, sets: 3 },
        { exercise_id: 9, reps: 8, sets: 3 },
        { exercise_id: 10, reps: 8, sets: 3 },
        { exercise_id: 11, reps: 8, sets: 3 }
      ]
    },
    "2": {
      id: 1, exercises: [
        { exercise_id: 6, reps: 8, sets: 3 },
        { exercise_id: 7, reps: 8, sets: 3 },
        { exercise_id: 8, reps: 8, sets: 3 },
        { exercise_id: 9, reps: 8, sets: 3 },
        { exercise_id: 10, reps: 8, sets: 3 },
        { exercise_id: 11, reps: 8, sets: 3 }
      ]
    }
  },
  exercises: {
    "6": { id: 6, name: 'deadlift', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0032.gif' },
    "7": { id: 7, name: 'lunge', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0336.gif' },
    "8": { id: 8, name: 'calf raise', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0417.gif' },
    "9": { id: 9, name: 'split squat', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0410.gif' },
    "10": { id: 10, name: 'good morning', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0044.gif' },
    "11": { id: 11, name: 'squat', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0063.gif' }
  }
};

export default { //do I need to name this object?
  get: jest.fn(url => {
    if (url === "/api/workouts?user=1") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.workouts
      });
    }
    if (url === "/api/exercises?workout=1") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data: fixtures.exercises
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