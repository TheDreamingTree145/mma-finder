class ApplicationController < ActionController::API

  def find_gym
    @gym = Gym.find_by(params[:id]) || Gym.find_by(params[:gym_id])
  end
end
