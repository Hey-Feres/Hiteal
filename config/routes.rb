Rails.application.routes.draw do
  
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  root 'home#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
    	resources :gyms,   except: [:edit,:new]
    	resources :users,  except: [:edit,:new]
    	resources :aulas,  except: [:edit,:new]
    	resources :avisos, except: [:edit,:new]
      resources :planos, except: [:edit,:new]
      resources :alunos, except: [:edit,:new]

      post '/gyms/upload', to: "gyms#upload"
      get '/gyms/:id/imagens', to: "gyms#imagens"
      delete '/gyms/delete_upload/:blob_id', to: "gyms#delete_upload"

      get '/todos_alunos/:gym_id/:page', to: "alunos#index"
      get '/todos_avisos/:gym_id/:page', to: "avisos#index"

      post '/search_alunos', to: "alunos#search"
      post '/search_avisos', to: "avisos#search"
      
      get '/planos_chart_data', to: "planos#chart_data"
    end
  end

  namespace :ui do
    resources :gyms, only: :index
    resources :users, only: :index
    resources :planos, only: :index
    resources :alunos, only: :index
    resources :avisos, only: :index
  end
end
