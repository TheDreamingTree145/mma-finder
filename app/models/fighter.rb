class Fighter < ApplicationRecord
  belongs_to :gym
  has_attached_file :avatar
  validates_attachement_content_type :avatar, content_type: /\Aimage\/.*\z/
end
