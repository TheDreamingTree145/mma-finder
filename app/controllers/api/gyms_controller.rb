class API::GymsController < ApplicationController

  def index
    gyms = Gym.all
    render :json => gyms
  end

  def create
    @gym = Fighter.create(gym_params)
    render :json => @gym
  end

  def show
    @gym = Fighter.find(params[:id])
    render :json => @gym
  end

  def update
    @gym = Figher.find(params[:id])
    @gym.update(gym_params)
    render :json => @gym
  end

  private

    def gym_params
      params.require(:fighter).permit(:name, :location, :owner)
    end

end

end
