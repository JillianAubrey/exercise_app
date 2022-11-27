class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.references :user, foreign_key: true, index: true
      t.string :name
      t.string :category
      t.string :gif_url
      t.timestamps
    end
  end
end
