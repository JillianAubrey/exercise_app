Rails.application.routes.draw do
  resources :users, only: [:index, :create]

  post '/login',    to: 'sessions#create'
  post '/logout',   to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#show'

  resources :workouts do
    resources :members, only: [:index, :create, :destroy]

    member do
      get 'statistics'
      get 'members'
    end
  end

  resources :exercises, except: [:show]

  resources :walkthroughs, only: [:create]
end