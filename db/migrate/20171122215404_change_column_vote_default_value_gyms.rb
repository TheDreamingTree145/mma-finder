class ChangeColumnVoteDefaultValueGyms < ActiveRecord::Migration[5.1]
  def change
    change_column :gyms, :vote, :integer, :default => 0
  end
end
