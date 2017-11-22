class GymSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :owner, :description, :image_url, :vote

end
