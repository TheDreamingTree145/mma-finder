class Gym < ApplicationRecord
  has_many :fighters
  has_attached_file :avatar
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/
end
