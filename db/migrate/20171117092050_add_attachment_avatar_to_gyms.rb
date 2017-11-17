class AddAttachmentAvatarToGyms < ActiveRecord::Migration[5.0]
  def self.up
    change_table :gyms do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :gyms, :avatar
  end
end
