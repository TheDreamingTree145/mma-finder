class FighterSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :weight_class, :hometown, :gym_id, :description, :image_url
  has_one :gym
end
