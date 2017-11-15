class FighterSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :weight_class, :hometown, :gym_id
  has_one :gym
end
