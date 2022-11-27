class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.string :name
      t.timestamps
    end

    add_reference :workouts, :user, index: true, foreign_key: true
  end
end
