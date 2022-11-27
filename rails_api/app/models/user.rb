class User < ApplicationRecord
  has_many :owned_workouts, class_name: "Workout"
  has_and_belongs_to_many :workouts
  has_many :exercises

  has_secure_password

  def create
    User.new(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end
