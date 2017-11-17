class FighterSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :weight_class, :hometown, :gym_id, :description, :avatar
  has_one :gym
end
