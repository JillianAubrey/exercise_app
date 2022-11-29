# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## USERS
puts "Creating Users..."

user1 = User.create!({
  name: 'John',
  email: 'john@domain.com',
  password: 'password',
  password_confirmation: 'password'
})

user2 = User.create!({
  name: 'Jane',
  email: 'jane@domain.com',
  password: 'password',
  password_confirmation: 'password'
})

user3 = User.create!({
  name: 'Bob',
  email: 'bob@domain.com',
  password: 'password',
  password_confirmation: 'password'
})

## Workouts
puts "Creating Workouts..."
workout1 = user1.owned_workouts.create!({name: 'Leg Day'})
workout2 = user2.owned_workouts.create!({name: 'Cardio'})
workout3 = user1.owned_workouts.create!({name: 'Cool Down'})

puts "Adding Users to Workouts..."
workout1.users << user1
workout2.users << user1
workout2.users << user2
workout2.users << user3
workout3.users << user1

## Exercises
puts "Creating Exercises..."

# Database exercises
rest = Exercise.create!({name: 'rest', category: 'rest', gif_url: 'https://i.imgur.com/dpnLlp7.png'})

chest_exercises = [
  Exercise.create!({name: 'push-up', category: 'chest', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0662.gif'}),
  Exercise.create!({name: 'bench press', category: 'chest', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0025.gif'}),
  Exercise.create!({name: 'chest fly', category: 'chest', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0308.gif'})
]

core_exercises = [
  Exercise.create!({name: 'sit-up', category: 'core', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/3679.gif'}),
  Exercise.create!({name: 'crunch', category: 'core', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0274.gif'}),
  Exercise.create!({name: 'dead bug', category: 'core', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0276.gif'})
]

leg_exercises = [
  Exercise.create!({name: 'deadlift', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0032.gif'}),
  Exercise.create!({name: 'lunge', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0336.gif'}),
  Exercise.create!({name: 'calf raise', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0417.gif'}),
  Exercise.create!({name: 'split squat', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0410.gif'}),
  Exercise.create!({name: 'good morning', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0044.gif'}),
  Exercise.create!({name: 'squat', category: 'legs', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0063.gif'})
]

cardio_exercises = [
  Exercise.create!({name: 'jumping jack', category: 'cardio', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/3220.gif'}),
  Exercise.create!({name: 'burpee', category: 'cardio', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/1160.gif'}),
  Exercise.create!({name: 'run', category: 'cardio', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0685.gif'}),
  Exercise.create!({name: 'skate hop', category: 'cardio', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/3361.gif'})
]

stretch_exercises = [
  Exercise.create!({name: 'butterfly pose', category: 'stretch', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/1494.gif' }),
  Exercise.create!({name: 'overhead tricep stretch', category: 'stretch', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0643.gif' }),
  Exercise.create!({name: 'wrist circles', category: 'stretch', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/1428.gif' })
]

arm_exercises = [
  Exercise.create!({name: 'bicep curl', category: 'arms', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0294.gif'}),
  Exercise.create!({name: 'tricep extension', category: 'arms', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0430.gif'}),
  Exercise.create!({name: 'wrist curl', category: 'arms', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0369.gif'})
]

shoulder_exercises = [
  Exercise.create!({name: 'lateral raise', category: 'shoulders', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0334.gif'}),
  Exercise.create!({name: 'front raise', category: 'shoulders', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0310.gif'}),
  Exercise.create!({name: 'shoulder press', category: 'shoulders', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0405.gif'}),
]

back_exercises = [
  Exercise.create!({name: 'bent over row', category: 'back', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0293.gif'}),
  Exercise.create!({name: 'lat pulldown', category: 'back', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0198.gif'}),
  Exercise.create!({name: 'shrug', category: 'back', gif_url: 'http://d205bpvrqc9yn1.cloudfront.net/0406.gif'})
]

# Custom Exercises
custom_exercises = [
  user1.exercises.create!({name: 'water break', category: 'rest', gif_url: 'http://clipart-library.com/img/2048367.jpg'}),
  user1.exercises.create!({name: 'forward fold', category: 'stretch'}),
  user1.exercises.create!({name: 'bent over twist', category: 'stretch', gif_url: 'https://www.spotebi.com/wp-content/uploads/2015/02/bent-over-twist-exercise-illustration.gif'})
]

## Workout_Exercises
puts "Adding Exercises to Workouts..."

for exercise in leg_exercises do
  workout1.workout_exercises.create!({exercise_id: exercise.id, reps: 8, sets: 3})
end

for exercise in cardio_exercises do
  workout2.workout_exercises.create!({exercise_id: exercise.id, duration: 300})
  workout2.workout_exercises.create!({exercise_id: rest.id, duration: 30})
end

for exercise in custom_exercises do
  workout3.workout_exercises.create({exercise_id: exercise.id, duration: 30})
end

## Walkthroughs
puts "Adding Walkthroughs..."

workout1.walkthroughs.create!({user_id: user1.id})
workout2.walkthroughs.create!({user_id: user1.id})
workout2.walkthroughs.create!({user_id: user1.id, created_at: DateTime.now - 1})
workout2.walkthroughs.create!({user_id: user1.id, created_at: DateTime.now - 8})
workout2.walkthroughs.create!({user_id: user1.id, created_at: DateTime.now - 15})
workout2.walkthroughs.create!({user_id: user2.id})
workout2.walkthroughs.create!({user_id: user2.id, created_at: DateTime.now - 8})
