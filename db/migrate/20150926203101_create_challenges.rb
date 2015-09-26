class CreateChallenges < ActiveRecord::Migration
  def change
    create_table :challenges do |t|
      t.integer :story_id, null: false
      t.integer :challenger_id, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
