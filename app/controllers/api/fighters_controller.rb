class API::FightersController < ApplicationController

  def index
    binding.pry
    if find_gym
      fighters = @gym.fighters
    else
      fighters = Fighter.all
    end
    render :json => fighters, status: 200
  end

  def create
    binding.pry
    @fighter = Fighter.create(fighter_params)
    render :json => @fighters
  end

  def show
    @fighter = Fighter.find(params[:id])
    render :json => @fighter
  end

  def update
    @fighter = Fighter.find(params[:id])
    @fighter.update(fighter_params)
    render :json => @fighter
  end

  private

    def fighter_params
      params.require(:fighter).permit(:name, :age, :weight_class, :hometown, :gym_id)
    end

end
