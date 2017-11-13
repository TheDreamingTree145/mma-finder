# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

fighter_1 = Fighter.create(name: "Jon Jones", age: 28, weight_class: "Light Heavyweight", hometown: "Buffalo")

gym_1 = Gym.create(name: "American Kickboxing Academy", location: "Coconut Creek, FL", owner: "Dave Camarillo")
