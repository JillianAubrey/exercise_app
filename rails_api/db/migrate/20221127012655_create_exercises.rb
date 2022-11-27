class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :category
      t.string :gif_url
      t.timestamps
    end

    add_reference :exercises, :user, index: true, foreign_key: true
  end
end
