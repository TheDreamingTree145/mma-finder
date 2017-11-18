class RemovePaperclipFromModels < ActiveRecord::Migration[5.1]
  def change
    remove_column :fighters, :avatar_file_name
    remove_column :fighters, :avatar_content_type
    remove_column :fighters, :avatar_file_size
    remove_column :fighters, :avatar_updated_at
    remove_column :gyms, :avatar_file_name
    remove_column :gyms, :avatar_content_type
    remove_column :gyms, :avatar_file_size
    remove_column :gyms, :avatar_updated_at
  end
end
