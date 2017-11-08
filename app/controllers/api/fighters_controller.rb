class API::FightersController < ApplicationController

  def index
    fighters = Fighter.all
    render :json => fighters, status: 200
  end
end
