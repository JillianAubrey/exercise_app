Rails.application.routes.draw do
  resources :users
  resources :workouts
  resources :exercises, except: [:show]
  resources :statistics, only: [:show]
end