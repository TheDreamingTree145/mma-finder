class API::FightersController < ApplicationController

  def index
    fighters = Fighter.all
    render :json => fighters, status: 200
  end

  def create
    @fighter = Fighter.create(fighter_params)
    render :json => @fighters
  end

  def show
    @fighter = Fighter.find(params[:id])
    render :json => @fighter
  end

  def update
    @fighter = Figher.find(params[:id])
    @fighter.update(fighter_params)
    render :json => @fighter
  end

  private

    def fighter_params
      params.require(:fighter).permit(:name, :age, :weight_class, :hometown, :gym_id)
    end

end
