class AddColumnImageUrlToFigtersAndGyms < ActiveRecord::Migration[5.1]
  def change
    add_column :fighters, :image_url, :string
    add_column :gyms, :image_url, :string 
  end
end
