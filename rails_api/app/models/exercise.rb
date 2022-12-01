class Exercise < ApplicationRecord

  belongs_to :user, optional: true
  has_many :workout_exercises, :dependent => :destroy
  has_many :workouts, through: :workout_exercises

  validates :name, :category, presence: true

  scope :db_exercises, -> {where("user_id IS NULL")}
end
