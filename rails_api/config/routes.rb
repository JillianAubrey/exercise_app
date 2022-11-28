Rails.application.routes.draw do
  resources :workouts
  resources :statistics, only: [:show]
end