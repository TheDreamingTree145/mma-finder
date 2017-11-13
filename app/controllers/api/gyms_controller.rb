class API::GymsController < ApplicationController
  before_action :find_gym, only: [:show, :update]

  def index
    gyms = Gym.all
    render :json => gyms
  end

  def create
    @gym = Gym.create(gym_params)
    render :json => @gym
  end

  def show
    @gym = Gym.find(params[:id])
    render :json => @gym
  end

  def update
    @gym = Gym.find(params[:id])
    @gym.update(gym_params)
    render :json => @gym
  end

  private

    def gym_params
      params.require(:fighter).permit(:name, :location, :owner)
    end

end

end
