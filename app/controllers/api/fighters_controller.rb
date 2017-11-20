class API::FightersController < ApplicationController

  def index
    fighters = Fighter.all
    render :json => fighters, status: 200
  end

  def create
    @fighter = Fighter.create(fighter_params)
    render :json => @fighter, status: 201
  end

  def show
    @fighter = Fighter.find(params[:id])
    render :json => @fighter
  end

  def update
    @fighter = Fighter.find(params[:id])
    binding.pry
    @fighter.update(fighter_params)
    binding.pry
    render :json => @fighter
  end

  private

    def fighter_params
      params.require(:fighter).permit(:name, :age, :weight_class, :hometown, :gym_id, :description, :image_url)
    end

end
