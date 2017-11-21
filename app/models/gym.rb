class Gym < ApplicationRecord
  has_many :fighters
  validates :name, presence: true
  validates :location, presence: true
  validates :owner, presence: true
  validates :image_url, presence: true
  validates :description, presence: true
end
