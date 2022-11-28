class Workout < ApplicationRecord
  belongs_to :owner, class_name: "User", foreign_key: "user_id"
  has_and_belongs_to_many :users
  has_many :workout_exercises
  has_many :exercises, through: :workout_exercises
  has_many :walkthroughs

  def category_counts
    self.exercises.group(:category).count
  end

  def first_gif
    self.exercises.first.gif_url
  end

  def statistics
    {
      :users => self.users.select(:id, :name),
      :all_walkthroughs => self.walkthroughs.group(:user_id).count,
      :last_week_walkthroughs => self.walkthroughs.created_since(DateTime.now - 7).group(:user_id).count
    }
  end
end
