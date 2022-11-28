class Exercise < ApplicationRecord
  belongs_to :user, optional: true
  has_many :workout_exercises
  has_many :workouts, through: :workout_exercises

  scope :db_exercises, -> {where("user_id IS NULL")}
end
