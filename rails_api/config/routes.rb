Rails.application.routes.draw do
  resources :workouts
  resources :exercises
  resources :statistics, only: [:show]
end