require 'rails_helper'

RSpec.describe Gym, type: :model do

  first_gym = Gym.create(name: "AKA", location: "Coconut Creek, Florida", owner: "Bob Cooke")

  first_gym.fighters.create(name: "Jon Jones", age: 28, weight_class: "Light Heavyweight", hometown: "Buffalo")

  it 'has many fighters' do
    expect(first_gym.fighters.length).to eq(1)
  end

end
