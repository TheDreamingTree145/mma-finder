class FighterSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :weight_class, :hometown, :gym_id, :description
  has_one :gym
end
