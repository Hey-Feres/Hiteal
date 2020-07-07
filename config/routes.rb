Rails.application.routes.draw do
  
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }

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
      resources :avaliacoes_fisicas, except: [:index, :edit,:new,:update]
      resources :app_sugestoes_updates, except: [:edit,:new]
      resources :assinaturas, except: [:edit,:new]
      resources :pagamentos, only: :create
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
      get '/all/avaliacoes_fisicas/:aluno_id/:page', to: "avaliacoes_fisicas#index"
      get '/all/app_sugestoes_updates/:page', to: "app_sugestoes_updates#index"
      # Destaques Routes
      get '/destaques/app_sugestoes_updates', to: "app_sugestoes_updates#destaques"
      # Proximas Routes
      post '/proximas/aulas', to: "aulas#proximas"
      # Search Routes
      post '/search_alunos', to: "alunos#search"
      post '/search_avisos', to: "avisos#search"
      post '/search_funcionarios', to: "funcionarios#search"
      post '/search/aulas', to: "aulas#search"
      post '/search/fichas', to: "fichas#search"
      # Chart Routes
      get '/planos_chart_data', to: "planos#chart_data"
      # Recentes Routes
      get '/recentes/avaliacoes_fisicas/:aluno_id', to: "avaliacoes_fisicas#recentes"
      # Alunos App Routes
      get 'minhas_aulas/:id', to: "alunos#aulas"
      post 'presenca/aula', to: "aulas#confirmar_presenca"
      delete 'presenca/aula/:aula_presenca_id', to: "aulas#cancelar_presenca"
      # 
      post 'app/alunos/auth', to: "alunos#auth"
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
    resources :avaliacoes_fisicas, only: :index
    resources :assinaturas, only: [:index]
    get "assinaturas/inativa", to: "assinaturas#inativa"
  end
end
