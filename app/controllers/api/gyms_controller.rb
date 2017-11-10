class API::GymsController < ApplicationController

  def index
    gyms = Gym.all
    render :json => gyms
  end
end
