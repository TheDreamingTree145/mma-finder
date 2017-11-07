require 'rails_helper'

RSpec.describe API::FightersController, type: :controller do

  describe 'GET index' do

    it 'has an index page' do
      get :index

      expect(response.status).to eq(200)
    end
  end

end
