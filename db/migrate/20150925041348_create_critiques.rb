class CreateCritiques < ActiveRecord::Migration
  def change
    create_table :critiques do |t|
      t.text :body, null: false
      t.integer :telling_id, null: false
      t.integer :critic_id, null: false

      t.timestamps null: false
    end
  end
end
