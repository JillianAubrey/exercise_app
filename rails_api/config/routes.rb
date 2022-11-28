Rails.application.routes.draw do
  resources :users, only: [:index]

  resources :workouts do
    member do
      get 'statistics'
    end
  end

  resources :exercises, except: [:show]

  resources :walkthroughs, only: [:create]
end