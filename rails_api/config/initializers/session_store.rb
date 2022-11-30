if Rails.env === 'production' 
  Rails.application.config.session_store :cookie_store, key: '_exercise-app', domain: 'exercise-app-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_exercise-app'
end