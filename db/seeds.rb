admin = User.create!( admin:true, email:"bruno@teste.com", password: '123456' )
gym = Gym.create!(nome: "Gym Legal", razao_social: "Gym Legal Ltda", cnpj: "123456789", cidade: "Belo Horizonte", estado: "MG", cep: "123456789", numero: "10")
admin.update(gym_id: gym.id)

planos = [{nome: "Mensal",valor: "100", periodo: 1},{nome: "Trimestral",valor: "90", periodo: 3},{nome: "Semestral",valor: "80", periodo: 6},{nome: "Anual",valor: "70", periodo: 12}]
planos.map{ |plano| Plano.create!( gym_id: 1, nome: plano[:nome], valor: plano[:valor], periodo: plano[:periodo]) }

8.times do |i|
	User.create!(admin:false,nome: Faker::Name.unique.name,email:"user_#{i}@teste.com",password: '123456',gym_id: 1)
end

500.times do |i|
	Aluno.create!( gym_id: 1, plano_id: rand(1..4), nome: Faker::Name.unique.name, email: "aluno_#{i}@teste.com", senha: "123456", nascimento: DateTime.now - rand(6025..15000).day )
end