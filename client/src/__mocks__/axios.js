const fixtures = {
  workouts: {

  }
}

export default {
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