Rails.application.routes.draw do
  
  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  root 'home#index'
  
  get "/news", to: "home#news"

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
    	resources :gyms,   except: [:edit,:new]
    	resources :users,  except: [:edit,:new]
    	resources :aulas,  except: [:edit,:new]
    	resources :avisos, except: [:edit,:new]
      resources :planos, except: [:edit,:new]
      resources :alunos, except: [:edit,:new]
      resources :funcionarios, except: [:edit,:new]
      resources :preferencias, except: [:edit,:new,:create]
      resources :fichas, only: [:show,:create,:destroy]
      # Upload Routes
      post '/gyms/upload', to: "gyms#upload"
      get '/gyms/:id/imagens', to: "gyms#imagens"
      delete '/gyms/delete_upload/:blob_id', to: "gyms#delete_upload"
      # All Routes
      get '/todos_alunos/:gym_id/:page', to: "alunos#index"
      get '/todos_avisos/:gym_id/:page', to: "avisos#index"
      get '/all/users/:gym_id/:page', to: "users#index"
      get '/todos_funcionarios/:gym_id/:page', to: "funcionarios#index"
      get '/all/aulas/:gym_id/:page', to: "aulas#index"
      get '/all/fichas/:aluno_id', to: "fichas#show"
      # Proximas Routes
      post '/proximas/aulas', to: "aulas#proximas"
      # Search Routes
      post '/search_alunos', to: "alunos#search"
      post '/search_avisos', to: "avisos#search"
      post '/search_funcionarios', to: "funcionarios#search"
      post '/search/aulas', to: "aulas#search"
      # Chart Routes
      get '/planos_chart_data', to: "planos#chart_data"
      # Alunos App Routes
      get 'minhas_aulas/:id', to: "alunos#aulas"
      post 'presenca/aula', to: "aulas#confirmar_presenca"
      delete 'presenca/aula/:aula_presenca_id', to: "aulas#cancelar_presenca"      
    end
  end

  namespace :ui do
    resources :gyms, only: :index
    resources :users, only: :index
    resources :planos, only: :index
    resources :alunos, only: :index
    resources :avisos, only: :index
    resources :funcionarios, only: :index
    resources :aulas, only: :index
    resources :preferencias, only: :index
  end
end
