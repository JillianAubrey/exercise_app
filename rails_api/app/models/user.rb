class User < ApplicationRecord
  has_many :owned_workouts, class_name: "Workout", :dependent => :destroy
  has_and_belongs_to_many :workouts
  has_many :exercises, :dependent => :destroy
  has_many :walkthroughs, :dependent => :destroy

  validates :name, presence: true
  validates :name, uniqueness: true
  validates :email, presence: true
  validates :email, uniqueness: true
  has_secure_password
end
