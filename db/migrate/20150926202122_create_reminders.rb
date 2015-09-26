class CreateReminders < ActiveRecord::Migration
  def change
    create_table :reminders do |t|
      t.integer :story_id, null: false
      t.datetime :appointment, null: false

      t.timestamps null: false
    end
  end
end
