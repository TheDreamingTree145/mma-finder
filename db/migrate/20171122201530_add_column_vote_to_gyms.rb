class AddColumnVoteToGyms < ActiveRecord::Migration[5.1]
  def change
    add_column :gyms, :vote, :integer
  end
end
