require 'rails_helper'

RSpec.describe ApiController, type: :controller do

  describe 'GET index' do

    it 'has an index page' do
      get :index

      expect(response.status).to eq(200)
    end
  end

end
