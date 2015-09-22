class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :stories, :user_id
  end
end
