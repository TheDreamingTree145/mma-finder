Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'site#index'

  namespace :api do
    resources :fighters, :only => [:index, :create, :show, :update]
    resources :gyms, :only => [:index, :create, :show, :update] do
      resources :fighters, :only => [:index]
    end
  end
end
