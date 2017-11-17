class AddColumnDescriptionToFighters < ActiveRecord::Migration[5.1]
  def change
    add_column :fighters, :description, :string
  end
end
