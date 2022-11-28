Rails.application.routes.draw do
  resources :users

  resources :workouts do
    member do
      get 'statistics'
    end
  end

  resources :exercises, except: [:show]
end