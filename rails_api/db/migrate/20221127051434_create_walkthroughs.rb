class CreateWalkthroughs < ActiveRecord::Migration[6.1]
  def change
    create_table :walkthroughs do |t|
      t.references :user, foreign_key: true, index: true
      t.references :workout, foreign_key: true, index: true
      t.timestamps
    end
  end
end
