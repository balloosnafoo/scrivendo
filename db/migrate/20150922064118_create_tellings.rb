class CreateTellings < ActiveRecord::Migration
  def change
    create_table :tellings do |t|
      t.string :title
      t.text :body, null: false
      t.text :description
      t.integer :story_id, null: false
      t.timestamps null: false
    end

    add_index :tellings, :story_id
  end
end
