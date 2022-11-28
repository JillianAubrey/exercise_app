Rails.application.routes.draw do
  resources :workouts
  resources :exercises, except: [:show]
  resources :statistics, only: [:show]
end