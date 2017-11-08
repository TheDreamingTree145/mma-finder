class CreateFighters < ActiveRecord::Migration[5.1]
  def change
    create_table :fighters do |t|
      t.string :name
      t.integer :age
      t.string :weight_class
      t.string :hometown
      t.integer :gym_id

      t.timestamps
    end
  end
end
