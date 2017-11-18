class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :owner, :description

end
