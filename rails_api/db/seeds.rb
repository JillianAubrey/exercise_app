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

## Workouts
puts "Creating Workouts..."
workout1 = user1.owned_workouts.create!({name: 'Leg Day'})
workout1.users << user1

workout2 = user2.owned_workouts.create!({name: 'Cardio'})
workout2.users << user1
workout2.users << user2