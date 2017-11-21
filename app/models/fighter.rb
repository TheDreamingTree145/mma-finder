class Fighter < ApplicationRecord
  belongs_to :gym
  validates :name, presence: true
  validates :age, numericality: true
  validates :weight_class, presence: true
  validates :hometown,presence: true
  validates :gym_id, presence: true, numericality: true
  validates :description, presence: true
  validates :image_url, presence: true
end
