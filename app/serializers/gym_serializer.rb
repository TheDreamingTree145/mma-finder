class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :owner, :description, :avatar
  has_many :fighters
  
end
