class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.references :user, foreign_key: true, index: true
      t.string :name
      t.timestamps
    end
  end
end
