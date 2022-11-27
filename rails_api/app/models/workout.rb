class Workout < ApplicationRecord
  belongs_to :owner, class_name: "User", foreign_key: "user_id"
  has_and_belongs_to_many :users
  has_many :workout_exercises
  has_many :exercises, through: :workout_exercises
end
