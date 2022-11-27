class AddUsersWorkoutsJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :users, :workouts do |t|
      t.index :workout_id
      t.index :user_id
    end
  end
end
