class CreateWorkoutExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :workout_exercises do |t|
      t.references :workout, null: false, foreign_key: true, index: true
      t.references :exercise, null: false, foreign_key: true

      t.integer :reps
      t.integer :sets
      t.integer :duration
      t.text    :note

      t.timestamps
    end
  end
end
