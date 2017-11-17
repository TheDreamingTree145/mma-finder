class AddColumnDescriptionToGyms < ActiveRecord::Migration[5.1]
  def change
    add_column :gyms, :description, :string
  end
end
