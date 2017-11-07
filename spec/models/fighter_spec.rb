require 'rails_helper'

RSpec.describe Fighter, type: :model do
  describe "Check attributes"

    fighter = Fighter.create(name: "Jon Jones", age: 28, weight_class: "Light Heavyweight", hometown: "Buffalo")

    it 'has a name' do
      expect(fighter.name).not_to be_empty
      expect(fighter.name).to be_a(String)
    end

    it 'has an age' do
      expect(fighter.age).to be_a(Integer)
    end

    it 'has a weight class' do
      expect(fighter.hometown).not_to be_empty
      expect(fighter.weight_class).to be_a(String)
    end

    it 'has a hometown' do
      expect(fighter.hometown).not_to be_empty
      expect(fighter.hometown).to be_a(String)
    end

end
