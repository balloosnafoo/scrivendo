class CreateVariants < ActiveRecord::Migration
  def change
    create_table :variants do |t|
      t.string :description, null: false
      t.integer :creator_id, null: false

      t.timestamps null: false
    end
  end
end
